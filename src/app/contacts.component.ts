import { Component, OnInit } from '@angular/core';
import { Contact} from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import { ContactService } from './contact.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  
  title = 'Angular 2 Master Class setup works!';

}
