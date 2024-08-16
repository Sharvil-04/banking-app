import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.forgotPassForm = this.formBuilder.group({
      newpass: ['', Validators.required],
      confirmpass: ['', Validators.required]
    })
    
  }

  onSubmit(){
    console.log(this.forgotPassForm.value);
  }

}
