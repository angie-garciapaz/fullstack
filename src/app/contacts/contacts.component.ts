import {Component, Injectable, OnInit} from '@angular/core';
import {Contact} from './contact.model';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe
    ((contact: Contact) => {
      console.log('hi')
      console.log('contact', contact)
      this.selectedContact = contact;
      console.log('selected', this.selectedContact);
    });
  }
}
