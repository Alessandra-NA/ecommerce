import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   loading = false;
   loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
   })

   constructor(private userService: UserService, private router: Router){}

   onSubmit() {
      this.loading = true;
      this.userService.logIn(this.loginForm.get('email')?.value!, this.loginForm.get('password')?.value!).subscribe({
         next: (user) => {
            const us: User = user
            localStorage.setItem('logged', 'true');
            this.userService.changeAuthenticated(true); 
            this.router.navigate(['/']);
         },
         error: (err) => {
            console.log(err)
         }
      })
   }
}
