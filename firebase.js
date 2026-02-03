import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { FIREBASE_CONFIG } from './src/config/apiConfig';
 
const app = initializeApp(FIREBASE_CONFIG);
 
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
 
export { auth };
export default app;