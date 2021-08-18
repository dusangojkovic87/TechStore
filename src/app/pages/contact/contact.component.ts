import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  messageForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Message: ['', Validators.required],
    });
  }

  sendMessage(formData: FormGroup) {
    if (
      formData.controls.Name.errors?.required ||
      formData.controls.Email.errors?.required ||
      formData.controls.Message.errors?.required
    ) {
      Swal.fire('fields cannot be empty!');
      return;
    }

    if (formData.controls.Email.errors?.email) {
      Swal.fire('Email is not valid!');
      return;
    }

    if(formData.valid){
      Swal.fire('Message sent!');
      formData.reset();

    }
  }
}
