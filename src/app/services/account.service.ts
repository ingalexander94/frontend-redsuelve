import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { sendRequest } from '../helpers/fetch';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}

  loadAccountsByPerson = async (person: String) => {
    try {
      const req = await sendRequest(`api/account/${person}`);
      const body = await req.json();
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  createAccount = async (bank: String, person: String) => {
    try {
      const req = await sendRequest('api/account', 'POST', { person, bank });
      const body = await req.json();
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  deleteAccount = async (account: String) => {
    try {
      const req = await sendRequest(`api/account/${account}`, 'DELETE', {});
      const body = await req.json();
      return body;
    } catch (error) {
      console.error(error);
    }
  };
}
