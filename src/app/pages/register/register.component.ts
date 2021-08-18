import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      Name: ['', Validators.required],
      Surname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.required],
    });
  }

  register(registerData: FormGroup) {
    if (!registerData.valid) {
      console.log(registerData.value);
    }
  }
}
