import { Component } from '@angular/core';
import { Event } from '../../models/event.model';
import { Guest } from '../../models/guest.model';
import { Feedback } from '../../models/feedback.model';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent {
  event: Event = { name: '', date: '', time: '', venue: '' };
  guests: Guest[] = [];
  feedbacks: Feedback[] = [];
  newGuest: Guest = { name: '', email: '', rsvpStatus: 'Maybe' };

  addGuest() {
    this.guests.push({ ...this.newGuest });
    this.newGuest = { name: '', email: '', rsvpStatus: 'Maybe' };
  }

  addFeedback(guestEmail: string, comments: string) {
    this.feedbacks.push({ guestEmail, comments });
  }

  updateRSVP(email: string, status: 'Attending' | 'Not Attending' | 'Maybe') {
    const guest = this.guests.find(g => g.email === email);
    if (guest) {
      guest.rsvpStatus = status;
    }
  }
}
