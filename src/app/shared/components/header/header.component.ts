import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../modules/user/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
   authenticated!: boolean;
   subscription!: Subscription;
   constructor(private userService: UserService) {
   }

   ngOnInit(): void {
      this.subscription = this.userService.wasAuthenticated.subscribe((auth: boolean) => {
         this.authenticated = auth;
         console.log(this.authenticated)
      })
      this.checkSession()
   }

   checkSession() {
      this.userService.checkSession().subscribe({
         next: () => {
            this.userService.changeAuthenticated(true);
         },
         error: () => {
            localStorage.removeItem('userData');
         }
      })
   }

   logout() {
      this.userService.logOut().subscribe(() => {
         this.userService.changeAuthenticated(false);
         localStorage.removeItem('userData');
         window.location.reload();
      })
   }
}
