import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hasError: boolean = false;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private router: Router){
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if(this.loginForm.valid){
      console.log('Login Success!');
      this.hasError = false;
      this.router.navigate(['/home']);
    }else{
      console.log("False");
      this.hasError = true;
      this.errorMessage = 'Invalid UserName or Password';
    }
  }

}
