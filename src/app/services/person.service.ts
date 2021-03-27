import { Injectable } from '@angular/core';
import { sendRequest } from '../helpers/fetch';
import Person from '../interfaces/Person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() {}

  createPerson = async (person: Person) => {
    try {
      const req = await sendRequest('api/person', 'POST', person);
      const body = await req.json();
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  loadPerson = async () => {
    try {
      const req = await sendRequest('api/person');
      const body = await req.json();
      return body;
    } catch (error) {
      console.error(error);
    }
  };
}
