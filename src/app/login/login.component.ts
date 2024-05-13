import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor() {}

  onSubmit(form: any): void {
    const email = form.form.value.email;
    const password = form.form.value.password;

    if (!email || !password) {
      alert('Please fill in both email and password fields.');
    } else {
      // Proceed with form submission
      console.log('Form submitted successfully.');
    }
  }
}
