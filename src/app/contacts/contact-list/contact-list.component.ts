import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';

@Injectable()
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onSelected(contact: Contact) {
    console.log(contact);
    this.contactService.contactSelectedEvent.emit(contact);
  }

}
