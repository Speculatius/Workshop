import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Contact} from './models/contact';

@Injectable()
export class ContactService{
    private API_ENDPOINT: string = 'http://localhost:4201';

    constructor(private http: Http){}

    getContacts(){
        return this.http.get(`${this.API_ENDPOINT}/api/contacts`) //template syntax ES2015
            /*.map((res) => { return res.json(); })
            .map((data) => { return data.items; });*/
            .map(res => res.json().items);
    }

    getContact(id: number){
        return this.http.get(`${this.API_ENDPOINT}/api/contacts/${id}`)
            .map((res) => { return res.json(); })
            .map((data) => { return data.item; });
    }
}