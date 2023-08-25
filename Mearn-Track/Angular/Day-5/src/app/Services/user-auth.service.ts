import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor() {}

  login(): void {
    // Your login logic
    // After successful login:
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    // Your logout logic
    // After logout:
    this.isLoggedInSubject.next(false);
  }
}
