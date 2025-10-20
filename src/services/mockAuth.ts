// Моковый сервис аутентификации для замены Firebase Auth
import { MockDatabase } from './mockDatabase';
import User from '@entities/user';

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthState {
  currentUser: AuthUser | null;
}

class MockAuth {
  private listeners: ((user: AuthUser | null) => void)[] = [];
  private currentUser: AuthUser | null = null;

  constructor() {
    // Симулируем проверку состояния аутентификации при инициализации
    this.checkAuthState();
  }

  private checkAuthState() {
    const user = MockDatabase.getCurrentUser();
    if (user) {
      this.currentUser = {
        uid: user.id,
        email: user.email,
        displayName: `${user.firstName} ${user.lastName}`,
        photoURL: user.photoUrl || null
      };
    }
  }

  // Симулирует onAuthStateChanged из Firebase
  onAuthStateChanged(callback: (user: AuthUser | null) => void) {
    this.listeners.push(callback);
    
    // Вызываем callback с текущим состоянием
    callback(this.currentUser);
    
    // Возвращаем функцию для отписки
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // Симулирует signInWithEmailAndPassword
  async signInWithEmailAndPassword(email: string, password: string) {
    const user = await MockDatabase.signInWithEmail(email, password);
    
    if (user) {
      this.currentUser = {
        uid: user.id,
        email: user.email,
        displayName: `${user.firstName} ${user.lastName}`,
        photoURL: user.photoUrl || null
      };
      
      // Уведомляем всех слушателей
      this.notifyListeners();
      return { user: this.currentUser };
    } else {
      throw new Error('Invalid email or password');
    }
  }

  // Симулирует signInWithPopup для Google
  async signInWithPopup(provider: any) {
    let user: User | null = null;
    
    if (provider.providerId === 'google.com') {
      user = await MockDatabase.signInWithGoogle();
    } else if (provider.providerId === 'facebook.com') {
      user = await MockDatabase.signInWithFacebook();
    }
    
    if (user) {
      this.currentUser = {
        uid: user.id,
        email: user.email,
        displayName: `${user.firstName} ${user.lastName}`,
        photoURL: user.photoUrl || null
      };
      
      // Уведомляем всех слушателей
      this.notifyListeners();
      return { user: this.currentUser };
    } else {
      throw new Error('Authentication failed');
    }
  }

  // Симулирует createUserWithEmailAndPassword
  async createUserWithEmailAndPassword(email: string, password: string) {
    const existingUser = await MockDatabase.getUser(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const user = await MockDatabase.createUser({
      email,
      phone: '',
      firstName: '',
      lastName: '',
      role: 'user',
      createdDate: Date.now()
    });

    this.currentUser = {
      uid: user.id,
      email: user.email,
      displayName: `${user.firstName} ${user.lastName}`,
      photoURL: user.photoUrl || null
    };

    this.notifyListeners();
    return { user: this.currentUser };
  }

  // Симулирует sendPasswordResetEmail
  async sendPasswordResetEmail(email: string) {
    await MockDatabase.resetPassword(email);
  }

  // Симулирует updateProfile
  async updateProfile(updates: { displayName?: string; photoURL?: string }) {
    if (!this.currentUser) {
      throw new Error('No user signed in');
    }

    const user = await MockDatabase.getUser(this.currentUser.uid);
    if (user) {
      const [firstName, lastName] = (updates.displayName || '').split(' ');
      await MockDatabase.updateUser(this.currentUser.uid, {
        firstName: firstName || user.firstName,
        lastName: lastName || user.lastName,
        photoUrl: updates.photoURL || user.photoUrl
      });

      this.currentUser.displayName = updates.displayName || this.currentUser.displayName;
      this.currentUser.photoURL = updates.photoURL || this.currentUser.photoURL;
    }
  }

  // Симулирует signOut
  async signOut() {
    await MockDatabase.signOut();
    this.currentUser = null;
    this.notifyListeners();
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentUser));
  }
}

// Создаем экземпляр и экспортируем
export const mockAuth = new MockAuth();

// Экспортируем класс для создания провайдеров
export class GoogleAuthProvider {
  providerId = 'google.com';
}

export class FacebookAuthProvider {
  providerId = 'facebook.com';
}

export default mockAuth;
