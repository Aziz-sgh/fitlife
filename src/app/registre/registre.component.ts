import { Component } from '@angular/core';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isFormValid: boolean = false;

  onSubmit(): void {
    // Check if any input field is empty
    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    // Check if email is valid
    if (!this.validateEmail(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Check if password is under 8 characters
    if (this.password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    // Check if password and confirm password match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // If all checks pass, proceed with registration
    // You can implement your registration logic here
    // For now, let's just display a success message
    alert('Registration successful!');
  }

  private validateEmail(email: string): boolean {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  checkFormValidity(): void {
    // Update form validity based on validation checks
    this.isFormValid = !!this.firstName && !!this.lastName && !!this.email && !!this.password && !!this.confirmPassword
      && this.validateEmail(this.email) && (this.password.length >= 8) && (this.password === this.confirmPassword);
  }
}
