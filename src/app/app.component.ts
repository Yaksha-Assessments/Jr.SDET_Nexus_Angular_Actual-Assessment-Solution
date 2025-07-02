import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital Patient Registration';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
