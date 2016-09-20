import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';

import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent} from './contacts-header';
import { ContactService } from './contact.service';
import { ContactsAppRoutes } from './contacts.route';
import { ContactsListComponent} from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';

@NgModule({
  declarations: [ContactsAppComponent,ContactsHeaderComponent, ContactsListComponent, ContactsDetailComponent],
  imports: [BrowserModule,
            RouterModule.forRoot(ContactsAppRoutes),
            HttpModule],
  providers: [ContactService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
