import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let form: DebugElement;
    let nameInput: HTMLInputElement;
    let emailInput: HTMLInputElement;
    let ageInput: HTMLInputElement;
    let passwordInput: HTMLInputElement;
    let confirmPasswordInput: HTMLInputElement;
    let submitButton: HTMLButtonElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [AppComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        form = fixture.debugElement.query(By.css('form'));
        nameInput = fixture.debugElement.query(By.css('#name')).nativeElement;
        emailInput = fixture.debugElement.query(By.css('#email')).nativeElement;
        ageInput = fixture.debugElement.query(By.css('#age')).nativeElement;
        passwordInput = fixture.debugElement.query(By.css('#password')).nativeElement;
        confirmPasswordInput = fixture.debugElement.query(By.css('#confirmPassword')).nativeElement;
        submitButton = fixture.debugElement.query(By.css('button')).nativeElement;
    });

    describe('boundary', () => {
        it('should create the component', () => {
            expect(component).toBeTruthy();
        });

        it('should have a valid form when all fields are filled correctly', () => {
            nameInput.value = 'John Doe';
            emailInput.value = 'john.doe@example.com';
            ageInput.value = '25';
            passwordInput.value = 'password123';
            confirmPasswordInput.value = 'password123';

            nameInput.dispatchEvent(new Event('input'));
            emailInput.dispatchEvent(new Event('input'));
            ageInput.dispatchEvent(new Event('input'));
            passwordInput.dispatchEvent(new Event('input'));
            confirmPasswordInput.dispatchEvent(new Event('input'));

            fixture.detectChanges();

            expect(component.myForm.valid).toBe(true);
        });

        it('should mark name as invalid when it is empty or less than 3 characters', () => {
            nameInput.value = '';
            nameInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(component.myForm.get('name')?.invalid).toBe(true);

            nameInput.value = 'Jo';
            nameInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(component.myForm.get('name')?.invalid).toBe(true);
        });

        it('should mark email as invalid when it is not a valid email address', () => {
            emailInput.value = 'invalid-email';
            emailInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(component.myForm.get('email')?.invalid).toBe(true);

            emailInput.value = 'john.doe@example.com';
            emailInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(component.myForm.get('email')?.valid).toBe(true);
        });

        it('should mark age as invalid when it is less than 18', () => {
            ageInput.value = '17';
            ageInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(component.myForm.get('age')?.invalid).toBe(true);

            ageInput.value = '18';
            ageInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(component.myForm.get('age')?.valid).toBe(true);
        });

        it('should mark password as invalid when it is less than 6 characters', () => {
            passwordInput.value = '12345';
            passwordInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(component.myForm.get('password')?.invalid).toBe(true);

            passwordInput.value = 'password123';
            passwordInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(component.myForm.get('password')?.valid).toBe(true);
        });

        it('should disable the submit button if the form is invalid', () => {
            submitButton.disabled = component.myForm.invalid;
            expect(submitButton.disabled).toBe(true);

            nameInput.value = 'John Doe';
            emailInput.value = 'john.doe@example.com';
            ageInput.value = '25';
            passwordInput.value = 'password123';
            confirmPasswordInput.value = 'password123';
            nameInput.dispatchEvent(new Event('input'));
            emailInput.dispatchEvent(new Event('input'));
            ageInput.dispatchEvent(new Event('input'));
            passwordInput.dispatchEvent(new Event('input'));
            confirmPasswordInput.dispatchEvent(new Event('input'));

            fixture.detectChanges();
            expect(submitButton.disabled).toBe(false);
        });

        it('should call onSubmit when the form is valid and the submit button is clicked', () => {
            jest.spyOn(component, 'onSubmit');

            nameInput.value = 'John Doe';
            emailInput.value = 'john.doe@example.com';
            ageInput.value = '25';
            passwordInput.value = 'password123';
            confirmPasswordInput.value = 'password123';

            nameInput.dispatchEvent(new Event('input'));
            emailInput.dispatchEvent(new Event('input'));
            ageInput.dispatchEvent(new Event('input'));
            passwordInput.dispatchEvent(new Event('input'));
            confirmPasswordInput.dispatchEvent(new Event('input'));

            fixture.detectChanges();

            submitButton.click();
            fixture.detectChanges();

            expect(component.onSubmit).toHaveBeenCalled();
        });
    });
});
