import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  document: Document[] = [
    new Document('1', 'angie', 'eyes', 'angie.com', '1'),
    new Document('2', 'ang', 'leg', 'angie.net', '2'),
    new Document('3', 'ange', 'knee', 'angie.org', '3'),
    new Document('4', 'nicole', 'elbow', 'nicole.com', '4')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
