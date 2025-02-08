import { inject, Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth?: Auth;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      import('@angular/fire/auth').then((module) => {
        this.auth = module.getAuth(); // 🔥 Inyectamos Firebase solo en el navegador
      });
    }
  }

  async register(email: string, password: string): Promise<UserCredential> {
    if (!this.auth) {
      throw new Error('Auth is not available in SSR');
    }

    try {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string): Promise<UserCredential> {
    if (!this.auth) {
      throw new Error('Auth is not available in SSR');
    }

    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    if (!this.auth) return;
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser() {
    return this.auth ? this.auth.currentUser : null;
  }
}
