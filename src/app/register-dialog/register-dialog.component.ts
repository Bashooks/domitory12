import { Component } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegisterDialogService } from './register-dialog.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent {
  registerForm: FormGroup;

  constructor(private dialog: MatDialog,private fb: FormBuilder,private registerservice: RegisterDialogService,private router:Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }
  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '432px',
    });
  }
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }

  register() {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      console.log('Form Data:', formValue);
  
      this.registerservice.register(formValue).subscribe({
        next: () => {
          Swal.fire('Success', 'Registration successful', 'success').then(() => {
            this.openLoginDialog()
          });
        },
        error: (err) => {
          // Handle error response
          console.error('Registration failed:', err);
          Swal.fire('Failed', 'Emailถูกใช้ไปแล้ว.', 'error');
        }
      });
    } else {
      Swal.fire('Failed', 'ตรวจสอบฟอร์มให้ครบถ้วน/รหัสผ่านต้องตรงกัน', 'error');
    }
  }

}
