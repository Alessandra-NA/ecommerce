import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private apiUrl = 'http://localhost:3000/user';
   private authenticated = new BehaviorSubject<boolean>(false);
   wasAuthenticated = this.authenticated.asObservable();
   constructor(private http: HttpClient) { }

   signUp(email: string, password: string) {
      const url = this.apiUrl + '/create';
      return this.http.post<User>(url, {email, password, role: 'user'});
   }
   logIn(email: string, password: string) {
      const url = this.apiUrl + '/login';
      return this.http.post<User>(url, {email, password}, {withCredentials: true});
   }
   logOut() {
      const url = this.apiUrl + '/logout';
      return this.http.get(url, { withCredentials: true });
   }
   checkSession() {
      const url = this.apiUrl;
      return this.http.get(url, { withCredentials: true });
   }
   changeAuthenticated(auth: boolean) {
      this.authenticated.next(auth);
   }
   checkAdmin() {
      const url = this.apiUrl + '/checkAdmin';
      return this.http.get<any>(url, { withCredentials: true });
   }
}
