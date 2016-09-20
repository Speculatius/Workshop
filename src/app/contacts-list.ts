import {Component,OnInit } from '@angular/core';
import {Contact} from './models/contact';
import {ContactService} from './contact.service';

@Component({
    selector: 'trm-contacts-list',
    templateUrl: 'contacts-list.html'
})
export class ContactsListComponent implements OnInit{

  constructor(private contactService : ContactService){}
  
  contacts: Array<Contact>;
  
  ngOnInit(){
    this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
  }
}