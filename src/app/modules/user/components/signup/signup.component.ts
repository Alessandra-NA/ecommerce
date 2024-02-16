import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
   loading = false;
   signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required]),
   })

   constructor(private userService: UserService, private router: Router){}

   onSubmit() {
      this.loading = true;
      if (this.signupForm.get('password')?.value === this.signupForm.get('password_confirmation')?.value) {
         this.userService.signUp(this.signupForm.get('email')?.value!, this.signupForm.get('password')?.value!).subscribe({
            next: (user) => {
               localStorage.setItem('userData', user.toString());
               this.userService.changeAuthenticated(true);
               this.router.navigate(['/']).then(() => {
                  window.location.reload();
               });
            },
            error: (err) => {
               console.log(err)
            }
         })
      }
   }
}
