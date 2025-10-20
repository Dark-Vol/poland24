// Замена для firebase.js - моковые сервисы
import { mockAuth, GoogleAuthProvider, FacebookAuthProvider } from './mockAuth';
import { mockFirestore } from './mockFirestore';

// Экспортируем моковые сервисы с теми же именами, что и в оригинальном firebase.js
export const auth = mockAuth;
export const db = mockFirestore;
export const googleAuthProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();

// Экспортируем app для совместимости
export const app = {
  name: 'mock-app',
  options: {},
  config: {
    apiKey: 'mock-api-key',
    authDomain: 'mock-project.firebaseapp.com',
    projectId: 'mock-project',
    storageBucket: 'mock-project.appspot.com',
    messagingSenderId: '123456789',
    appId: '1:123456789:web:mock-app-id'
  }
};

// Экспортируем все необходимые функции из Firestore для совместимости
export {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  query,
  where,
  limit,
  orderBy
} from './mockFirestore';

// Экспортируем типы
export type {
  CollectionReference,
  DocumentReference,
  QuerySnapshot,
  DocumentSnapshot,
  Query
} from './mockFirestore';

// Добавляем DocumentData тип
export type DocumentData = any;

// Экспортируем функции Auth для совместимости
export const signInWithEmailAndPassword = mockAuth.signInWithEmailAndPassword.bind(mockAuth);
export const createUserWithEmailAndPassword = mockAuth.createUserWithEmailAndPassword.bind(mockAuth);
export const signInWithPopup = mockAuth.signInWithPopup.bind(mockAuth);
export const signOut = mockAuth.signOut.bind(mockAuth);
export const sendPasswordResetEmail = mockAuth.sendPasswordResetEmail.bind(mockAuth);
export const updateProfile = mockAuth.updateProfile.bind(mockAuth);
export const onAuthStateChanged = mockAuth.onAuthStateChanged.bind(mockAuth);

// Экспортируем провайдеры
export { GoogleAuthProvider, FacebookAuthProvider } from './mockAuth';

export default {
  auth,
  db,
  app,
  googleAuthProvider,
  facebookAuthProvider
};
