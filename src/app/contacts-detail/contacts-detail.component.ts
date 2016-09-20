import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactService} from '../contact.service';
import {Contact} from '../models/contact';


@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact;

  constructor(route: ActivatedRoute, contactService: ContactService) {
    let id = route.snapshot.params['id'];
    contactService.getContact(id)
      .subscribe(contact => this.contact = contact);;
   }

  ngOnInit() {
  }

}
