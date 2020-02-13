import {Component, OnInit} from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [new Message(
    '1', 'Grades', 'the grades..', 'Bro. Jackson'),
    new Message(
      '2', 'Grades 1', 'the grades..', 'Steve Johnson'),
    new Message(
      '3', 'Grades', 'the grades..', 'Mark Smith')
  ];


  constructor() {
  }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}

// id: string;
// subject: string;
// msgText: string;
// sender: string;
