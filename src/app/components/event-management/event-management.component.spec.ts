import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventManagementComponent } from './event-management.component';
import { FormsModule } from '@angular/forms';

describe('EventManagementComponent', () => {
  let component: EventManagementComponent;
  let fixture: ComponentFixture<EventManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventManagementComponent],
      imports: [FormsModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventManagementComponent);
    component = fixture.componentInstance;
    component.event = {
      name: 'Test Event',
      date: '2023-01-01',
      time: '12:00',
      venue: 'Test Venue'
    };
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should display "Create Event" heading', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Create Event');
    });

    it('should have name input field', () => {
      expect(fixture.nativeElement.querySelector('input[name="name"]')).toBeTruthy();
    });

    it('should have date input field', () => {
      expect(fixture.nativeElement.querySelector('input[name="date"]')).toBeTruthy();
    });

    it('should have time input field', () => {
      expect(fixture.nativeElement.querySelector('input[name="time"]')).toBeTruthy();
    });

    it('should have venue input field', () => {
      expect(fixture.nativeElement.querySelector('input[name="venue"]')).toBeTruthy();
    });

    it('should display "Add Guest" heading', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('h2')[1].textContent).toContain('Add Guest');
    });

    it('should have guestName input field', () => {
      expect(fixture.nativeElement.querySelector('input[name="guestName"]')).toBeTruthy();
    });

    it('should have guestEmail input field', () => {
      expect(fixture.nativeElement.querySelector('input[name="guestEmail"]')).toBeTruthy();
    });

    it('should have an add guest button', () => {
      expect(fixture.nativeElement.querySelector('button[type="submit"]')).not.toBeNull();
    });

    it('should display "Event Details" heading', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('h2')[2].textContent).toContain('Event Details');
    });

    it('should display event name in a p tag', () => {
      const paragraphs = fixture.nativeElement.querySelectorAll('p');
      const nameDisplayed = Array.from(paragraphs).some((p: any) => p.textContent.includes('Name: Test Event'));
      expect(nameDisplayed).toBeTruthy();
    });

    it('should display event date in a p tag', () => {
      const paragraphs = fixture.nativeElement.querySelectorAll('p');
      const dateDisplayed = Array.from(paragraphs).some((p: any) => p.textContent.includes('Date: 2023-01-01'));
      expect(dateDisplayed).toBeTruthy();
    });

    it('should display event time in a p tag', () => {
      const paragraphs = fixture.nativeElement.querySelectorAll('p');
      const timeDisplayed = Array.from(paragraphs).some((p: any) => p.textContent.includes('Time: 12:00'));
      expect(timeDisplayed).toBeTruthy();
    });

    it('should display event venue in a p tag', () => {
      const paragraphs = fixture.nativeElement.querySelectorAll('p');
      const venueDisplayed = Array.from(paragraphs).some((p: any) => p.textContent.includes('Venue: Test Venue'));
      expect(venueDisplayed).toBeTruthy();
    });

    it('should display "Guest List" as a heading', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('h2')[3].textContent).toContain('Guest List');
    });

    it('should display "Feedback" as a heading', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelectorAll('h2')[4].textContent).toContain('Feedback');
    });

    it('should have comments as textarea', () => {
      expect(fixture.nativeElement.querySelector('textarea[name="comments"]')).toBeTruthy();
    });

    it('should have submit feedback button', () => {
      expect(fixture.nativeElement.querySelector('button[type="submit"]')).not.toBeNull();
    });

  });
});
