import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private users = signal<User[]>([]);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(users => this.users.set(users))
    );
  }

  deleteUser(id: number): void {
    this.users.update(users => users.filter(user => user.id !== id));
  }

  getUsersSignal() {
    return this.users;
  }
} 