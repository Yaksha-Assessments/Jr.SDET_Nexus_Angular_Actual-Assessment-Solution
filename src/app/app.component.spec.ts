import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the form and initialize correctly', () => {
      expect(component).toBeTruthy();
      const formElement = fixture.debugElement.query(By.css('form'));
      expect(formElement).toBeTruthy();
    });

    it('should validate full name input (>=3 characters)', () => {
      const fullNameInput = fixture.debugElement.query(By.css('input[name="fullName"]')).nativeElement;
      fullNameInput.value = 'Jane Doe';
      fullNameInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const error = fixture.debugElement.query(By.css('#fullName + .text-danger'));
      expect(error).toBeNull();
    });

    it('should require gender selection', () => {
      const genderSelect = fixture.debugElement.query(By.css('select[name="gender"]')).nativeElement;
      genderSelect.value = genderSelect.options[1].value; // "Male"
      genderSelect.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      const error = fixture.debugElement.query(By.css('#gender + .text-danger'));
      expect(error).toBeNull();
    });

    it('should validate date of birth is provided', () => {
      const dobInput = fixture.debugElement.query(By.css('input[name="dob"]')).nativeElement;
      dobInput.value = '2000-01-01';
      dobInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const error = fixture.debugElement.query(By.css('#dob + .text-danger'));
      expect(error).toBeNull();
    });

    it('should accept a valid email', () => {
      const emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement;
      emailInput.value = 'patient@example.com';
      emailInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const error = fixture.debugElement.query(By.css('#email + .text-danger'));
      expect(error).toBeNull();
    });

    it('should accept valid 10-digit contact number', () => {
      const contactInput = fixture.debugElement.query(By.css('input[name="contact"]')).nativeElement;
      contactInput.value = '9876543210';
      contactInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const error = fixture.debugElement.query(By.css('#contact + .text-danger'));
      expect(error).toBeNull();
    });

    it('should validate symptom description (min 10 characters)', () => {
      const symptomsInput = fixture.debugElement.query(By.css('textarea[name="symptoms"]')).nativeElement;
      symptomsInput.value = 'Headache and fever';
      symptomsInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const error = fixture.debugElement.query(By.css('#symptoms + .text-danger'));
      expect(error).toBeNull();
    });

    it('should validate appointment date is selected', () => {
      const appointmentInput = fixture.debugElement.query(By.css('input[name="appointmentDate"]')).nativeElement;
      appointmentInput.value = '2025-07-10';
      appointmentInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const error = fixture.debugElement.query(By.css('#appointmentDate + .text-danger'));
      expect(error).toBeNull();
    });
  });
});
