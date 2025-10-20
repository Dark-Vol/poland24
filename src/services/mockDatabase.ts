// Моковая база данных для замены Firebase
import User from '@entities/user';
import Order, { Status as OrderStatus } from '@entities/order';
import Request, { Status as RequestStatus } from '@entities/request';
import Review from '@entities/review';
import Store from '@entities/store';

// Моковые данные
let mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@poland24.com',
    phone: '+380501234567',
    firstName: 'Admin',
    lastName: 'User',
    city: 'Kyiv',
    post: '01001',
    role: 'admin',
    createdDate: Date.now() - 86400000,
  },
  {
    id: '2',
    email: 'user@example.com',
    phone: '+380507654321',
    firstName: 'John',
    lastName: 'Doe',
    city: 'Lviv',
    post: '79000',
    role: 'user',
    createdDate: Date.now() - 172800000,
  }
];

let mockOrders: Order[] = [
  {
    id: '1',
    userId: '2',
    post: '79000',
    phone: 380507654321,
    isViber: true,
    isTelegram: false,
    isEmail: true,
    isCall: false,
    isLicense: true,
    fullName: 'John Doe',
    email: 'user@example.com',
    createdDate: Date.now() - 86400000,
    comment: 'Test order',
    articles: [
      {
        name: 'Test Product',
        count: 2,
        deliveryPrice: 100,
        description: 'Test product description',
        link: 'https://example.com',
        price: 500,
        isUsed: false,
        currency: 'PLN',
        rate: 8.5
      }
    ],
    status: OrderStatus.IN_PROGRESS,
    orderNumber: 1,
    reservedPost: '79000'
  }
];

let mockRequests: Request[] = [
  {
    id: '1',
    createdDate: Date.now() - 86400000,
    articles: [
      {
        articleName: 'Test Article',
        comment: ''
      }
    ],
    email: 'user@example.com',
    name: 'John Doe',
    phoneNumber: 380507654321,
    status: RequestStatus.NEW,
    comment: 'Please help me find this product'
  }
];

let mockReviews: Review[] = [
  {
    id: '1',
    createdDate: Date.now() - 86400000,
    rating: 5,
    store: 'Allegro',
    text: 'Great service, fast delivery!',
    fullName: 'John Doe'
  },
  {
    id: '2',
    createdDate: Date.now() - 172800000,
    rating: 4,
    store: 'Ceneo',
    text: 'Good prices and quality service',
    fullName: 'Jane Smith'
  }
];

let mockStores: (Store & { id: string })[] = [
  {
    id: '1',
    name: 'Allegro',
    logo: '/images/stores/allegro.png',
    commission: 8.5,
    daysDelivery: 3
  },
  {
    id: '2',
    name: 'Ceneo',
    logo: '/images/stores/ceneo.png',
    commission: 7.0,
    daysDelivery: 2
  },
  {
    id: '3',
    name: 'Empik',
    logo: '/images/stores/empik.png',
    commission: 9.0,
    daysDelivery: 4
  }
];

// Текущий пользователь
let currentUser: User | null = null;

export class MockDatabase {
  // Users
  static async getUsers(): Promise<User[]> {
    return [...mockUsers];
  }

  static async getUser(id: string): Promise<User | null> {
    return mockUsers.find(user => user.id === id) || null;
  }

  static async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      createdDate: Date.now()
    };
    mockUsers.push(newUser);
    return newUser;
  }

  static async updateUser(id: string, userData: Partial<User>): Promise<User | null> {
    const userIndex = mockUsers.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...userData };
    return mockUsers[userIndex];
  }

  static async deleteUser(id: string): Promise<boolean> {
    const userIndex = mockUsers.findIndex(user => user.id === id);
    if (userIndex === -1) return false;
    
    mockUsers.splice(userIndex, 1);
    return true;
  }

  // Orders
  static async getOrders(): Promise<Order[]> {
    return [...mockOrders];
  }

  static async getOrdersByUserId(userId: string): Promise<Order[]> {
    return mockOrders.filter(order => order.userId === userId);
  }

  static async getOrder(id: string): Promise<Order | null> {
    return mockOrders.find(order => order.id === id) || null;
  }

  static async createOrder(orderData: Omit<Order, 'id' | 'orderNumber'>): Promise<Order> {
    const newOrder: Order = {
      ...orderData,
      id: Date.now().toString(),
      orderNumber: mockOrders.length + 1,
      createdDate: Date.now()
    };
    mockOrders.push(newOrder);
    return newOrder;
  }

  static async updateOrder(id: string, orderData: Partial<Order>): Promise<Order | null> {
    const orderIndex = mockOrders.findIndex(order => order.id === id);
    if (orderIndex === -1) return null;
    
    mockOrders[orderIndex] = { ...mockOrders[orderIndex], ...orderData };
    return mockOrders[orderIndex];
  }

  // Requests
  static async getRequests(): Promise<Request[]> {
    return [...mockRequests];
  }

  static async getRequest(id: string): Promise<Request | null> {
    return mockRequests.find(request => request.id === id) || null;
  }

  static async createRequest(requestData: Omit<Request, 'id'>): Promise<Request> {
    const newRequest: Request = {
      ...requestData,
      id: Date.now().toString(),
      createdDate: Date.now()
    };
    mockRequests.push(newRequest);
    return newRequest;
  }

  static async updateRequest(id: string, requestData: Partial<Request>): Promise<Request | null> {
    const requestIndex = mockRequests.findIndex(request => request.id === id);
    if (requestIndex === -1) return null;
    
    mockRequests[requestIndex] = { ...mockRequests[requestIndex], ...requestData };
    return mockRequests[requestIndex];
  }

  // Reviews
  static async getReviews(): Promise<Review[]> {
    return [...mockReviews];
  }

  static async getReviewsByUserId(userId: string): Promise<Review[]> {
    // В реальном приложении здесь была бы связь с пользователем
    return [...mockReviews];
  }

  static async getReview(id: string): Promise<Review | null> {
    return mockReviews.find(review => review.id === id) || null;
  }

  static async createReview(reviewData: Omit<Review, 'id'>): Promise<Review> {
    const newReview: Review = {
      ...reviewData,
      id: Date.now().toString(),
      createdDate: Date.now()
    };
    mockReviews.push(newReview);
    return newReview;
  }

  // Stores
  static async getStores(): Promise<(Store & { id: string })[]> {
    return [...mockStores];
  }

  static async getStore(id: string): Promise<(Store & { id: string }) | null> {
    return mockStores.find(store => store.id === id) || null;
  }

  static async createStore(storeData: Omit<Store & { id: string }, 'id'>): Promise<Store & { id: string }> {
    const newStore: Store & { id: string } = {
      ...storeData,
      id: Date.now().toString()
    };
    mockStores.push(newStore);
    return newStore;
  }

  static async updateStore(id: string, storeData: Partial<Store & { id: string }>): Promise<(Store & { id: string }) | null> {
    const storeIndex = mockStores.findIndex(store => store.id === id);
    if (storeIndex === -1) return null;
    
    mockStores[storeIndex] = { ...mockStores[storeIndex], ...storeData };
    return mockStores[storeIndex];
  }

  // Auth
  static getCurrentUser(): User | null {
    return currentUser;
  }

  static setCurrentUser(user: User | null): void {
    currentUser = user;
  }

  static async signInWithEmail(email: string, password: string): Promise<User | null> {
    const user = mockUsers.find(u => u.email === email);
    if (user) {
      currentUser = user;
      return user;
    }
    return null;
  }

  static async signInWithGoogle(): Promise<User | null> {
    // Симулируем вход через Google
    const user = mockUsers[1]; // Возвращаем второго пользователя как тестового
    currentUser = user;
    return user;
  }

  static async signInWithFacebook(): Promise<User | null> {
    // Симулируем вход через Facebook
    const user = mockUsers[1]; // Возвращаем второго пользователя как тестового
    currentUser = user;
    return user;
  }

  static async signOut(): Promise<void> {
    currentUser = null;
  }

  static async resetPassword(email: string): Promise<void> {
    // Симулируем отправку письма для сброса пароля
    console.log(`Password reset email sent to: ${email}`);
  }
}

export default MockDatabase;
