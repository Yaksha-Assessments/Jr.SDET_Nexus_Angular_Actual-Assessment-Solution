import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-driven-form-demo';

  // Create the form group
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      // Name field with validation
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),

      // Email field with validation
      email: new FormControl('', [Validators.required, Validators.email]),

      // Age field with validation
      age: new FormControl('', [Validators.required, Validators.min(18)]),

      // Password field with validation
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

      // Confirm password field with validation
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
