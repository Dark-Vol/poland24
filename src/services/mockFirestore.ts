// Моковый Firestore сервис для замены Firebase Firestore
import { MockDatabase } from './mockDatabase';
import User from '@entities/user';
import Order from '@entities/order';
import Request from '@entities/request';
import Review from '@entities/review';

export type DocumentData = any;

export interface DocumentSnapshot {
  id: string;
  data(): any;
  exists: boolean;
}

export interface QuerySnapshot {
  docs: DocumentSnapshot[];
  empty: boolean;
  size: number;
  forEach: (callback: (doc: DocumentSnapshot) => void) => void;
}

export interface DocumentReference {
  id: string;
  path: string;
}

export interface CollectionReference<T = DocumentData, K = DocumentData> extends DocumentReference {
  id: string;
  path: string;
}

export interface Query {
  where(field: string, operator: string, value: any): Query;
  limit(count: number): Query;
  orderBy(field: string, direction?: string): Query;
}

class MockDocumentSnapshot implements DocumentSnapshot {
  constructor(public id: string, private dataContent: any) {}

  data() {
    return this.dataContent;
  }

  get exists() {
    return this.dataContent !== null && this.dataContent !== undefined;
  }
}

class MockQuerySnapshot implements QuerySnapshot {
  constructor(public docs: DocumentSnapshot[]) {}

  get empty() {
    return this.docs.length === 0;
  }

  get size() {
    return this.docs.length;
  }

  forEach(callback: (doc: DocumentSnapshot) => void) {
    this.docs.forEach(callback);
  }
}

class MockDocumentReference implements DocumentReference {
  constructor(public id: string, public path: string) {}
}

class MockCollectionReference implements CollectionReference {
  constructor(public id: string, public path: string) {}
}

class MockQuery implements Query {
  public filters: { field: string; operator: string; value: any }[] = [];
  public limitCount?: number;
  public orderByField?: string;
  public orderByDirection?: string;
  public path: string = '';

  where(field: string, operator: string, value: any): Query {
    this.filters.push({ field, operator, value });
    return this;
  }

  limit(count: number): Query {
    this.limitCount = count;
    return this;
  }

  orderBy(field: string, direction: string = 'asc'): Query {
    this.orderByField = field;
    this.orderByDirection = direction;
    return this;
  }

  async get(): Promise<QuerySnapshot> {
    let data: any[] = [];

    // Определяем тип коллекции по пути
    if (this.path.includes('/users/')) {
      const userId = this.path.split('/users/')[1];
      const user = await MockDatabase.getUser(userId);
      if (user) {
        data = [{ id: user.id, ...user }];
      }
    } else if (this.path === 'users') {
      data = (await MockDatabase.getUsers()).map(user => ({ id: user.id, ...user }));
    } else if (this.path === 'orders') {
      data = (await MockDatabase.getOrders()).map(order => ({ id: order.id, ...order }));
    } else if (this.path === 'requests') {
      data = (await MockDatabase.getRequests()).map(request => ({ id: request.id, ...request }));
    } else if (this.path === 'reviews') {
      data = (await MockDatabase.getReviews()).map(review => ({ id: review.id, ...review }));
    } else if (this.path === 'shops') {
      data = (await MockDatabase.getStores()).map(store => ({ id: store.id, ...store }));
    }

    // Применяем фильтры
    data = data.filter(item => {
      return this.filters.every(filter => {
        const value = item[filter.field];
        switch (filter.operator) {
          case '==':
            return value === filter.value;
          case '!=':
            return value !== filter.value;
          case '>':
            return value > filter.value;
          case '<':
            return value < filter.value;
          case '>=':
            return value >= filter.value;
          case '<=':
            return value <= filter.value;
          case 'in':
            return Array.isArray(filter.value) && filter.value.includes(value);
          case 'not-in':
            return Array.isArray(filter.value) && !filter.value.includes(value);
          default:
            return true;
        }
      });
    });

    // Применяем сортировку
    if (this.orderByField) {
      data.sort((a, b) => {
        const aVal = a[this.orderByField!];
        const bVal = b[this.orderByField!];
        const modifier = this.orderByDirection === 'desc' ? -1 : 1;
        
        if (aVal < bVal) return -1 * modifier;
        if (aVal > bVal) return 1 * modifier;
        return 0;
      });
    }

    // Применяем лимит
    if (this.limitCount) {
      data = data.slice(0, this.limitCount);
    }

    const docs = data.map(item => new MockDocumentSnapshot(item.id, item));
    return new MockQuerySnapshot(docs);
  }
}

class MockFirestore {
  // Симулирует collection()
  collection(path: string): CollectionReference {
    return new MockCollectionReference(path, path);
  }

  // Симулирует doc()
  doc(path: string): DocumentReference {
    return new MockDocumentReference(path.split('/').pop() || '', path);
  }

  // Симулирует getDocs()
  async getDocs(queryOrCollection: any): Promise<QuerySnapshot> {
    if ('get' in queryOrCollection && typeof queryOrCollection.get === 'function') {
      // Это Query
      return queryOrCollection.get();
    } else {
      // Это CollectionReference
      const query = new MockQuery();
      query.path = queryOrCollection.path;
      return query.get();
    }
  }

  // Симулирует getDoc()
  async getDoc(docRef: DocumentReference): Promise<DocumentSnapshot> {
    const path = docRef.path;
    const id = docRef.id;
    
    let data: any = null;

    if (path.includes('/users/')) {
      const user = await MockDatabase.getUser(id);
      if (user) {
        data = { id: user.id, ...user };
      }
    } else if (path.includes('/orders/')) {
      const order = await MockDatabase.getOrder(id);
      if (order) {
        data = { id: order.id, ...order };
      }
    } else if (path.includes('/requests/')) {
      const request = await MockDatabase.getRequest(id);
      if (request) {
        data = { id: request.id, ...request };
      }
    } else if (path.includes('/reviews/')) {
      const review = await MockDatabase.getReview(id);
      if (review) {
        data = { id: review.id, ...review };
      }
    } else if (path.includes('/shops/')) {
      const store = await MockDatabase.getStore(id);
      if (store) {
        data = { id: store.id, ...store };
      }
    }

    return new MockDocumentSnapshot(id, data);
  }

  // Симулирует setDoc()
  async setDoc(docRef: DocumentReference, data: any): Promise<void> {
    const path = docRef.path;
    const id = docRef.id;

    if (path.includes('/users/')) {
      await MockDatabase.updateUser(id, data);
    } else if (path.includes('/orders/')) {
      await MockDatabase.updateOrder(id, data);
    } else if (path.includes('/requests/')) {
      await MockDatabase.updateRequest(id, data);
    } else if (path.includes('/reviews/')) {
      // Для reviews нужно создать новый, так как у них нет updateReview
      await MockDatabase.createReview(data);
    }
  }

  // Симулирует addDoc()
  async addDoc(collectionRef: CollectionReference, data: any): Promise<DocumentReference> {
    const path = collectionRef.path;
    let newId = '';

    if (path === 'users') {
      const user = await MockDatabase.createUser(data);
      newId = user.id;
    } else if (path === 'orders') {
      const order = await MockDatabase.createOrder(data);
      newId = order.id;
    } else if (path === 'requests') {
      const request = await MockDatabase.createRequest(data);
      newId = request.id;
    } else if (path === 'reviews') {
      const review = await MockDatabase.createReview(data);
      newId = review.id;
    } else if (path === 'shops') {
      const store = await MockDatabase.createStore(data);
      newId = store.id;
    }

    return new MockDocumentReference(newId, `${path}/${newId}`);
  }

  // Симулирует deleteDoc()
  async deleteDoc(docRef: DocumentReference): Promise<void> {
    const path = docRef.path;
    const id = docRef.id;

    if (path.includes('/users/')) {
      await MockDatabase.deleteUser(id);
    }
    // Для других типов документов можно добавить соответствующие методы удаления
  }

  // Симулирует query()
  query(collectionRef: CollectionReference, ...queryConstraints: any[]): Query {
    const query = new MockQuery();
    query.path = collectionRef.path;
    
    // Применяем ограничения запроса
    queryConstraints.forEach(constraint => {
      if (constraint.type === 'where') {
        query.where(constraint.field, constraint.operator, constraint.value);
      } else if (constraint.type === 'limit') {
        query.limit(constraint.count);
      } else if (constraint.type === 'orderBy') {
        query.orderBy(constraint.field, constraint.direction);
      }
    });
    
    return query;
  }
}

// Создаем экземпляр и экспортируем
export const mockFirestore = new MockFirestore();

// Экспортируем функции для совместимости с Firebase API
export const collection = (path: string) => mockFirestore.collection(path);
export const doc = (path: string) => mockFirestore.doc(path);
export const getDocs = (queryOrCollection: any) => {
  return mockFirestore.getDocs(queryOrCollection);
};
export const getDoc = (docRef: DocumentReference) => mockFirestore.getDoc(docRef);
export const setDoc = (docRef: DocumentReference, data: any) => mockFirestore.setDoc(docRef, data);
export const addDoc = (collectionRef: CollectionReference, data: any) => mockFirestore.addDoc(collectionRef, data);
export const deleteDoc = (docRef: DocumentReference) => mockFirestore.deleteDoc(docRef);
export const query = (collectionRef: CollectionReference, ...queryConstraints: any[]) => {
  return mockFirestore.query(collectionRef, ...queryConstraints);
};

export const where = (field: string, operator: string, value: any) => ({
  type: 'where',
  field,
  operator,
  value
});

export const limit = (count: number) => ({
  type: 'limit',
  count
});

export const orderBy = (field: string, direction?: string) => ({
  type: 'orderBy',
  field,
  direction
});

export default mockFirestore;
