import { Injectable } from '@angular/core';
import { sendRequest } from '../helpers/fetch';
import Bank from '../interfaces/Bank';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor() {}

  createBank = async (bank: Bank) => {
    try {
      const req = await sendRequest('api/bank', 'POST', bank);
      const body = await req.json();
      return body;
    } catch (error) {
      console.error(error);
    }
  };

  loadBank = async () => {
    try {
      const req = await sendRequest('api/bank');
      const body = await req.json();
      return body;
    } catch (error) {
      console.error(error);
    }
  };
}
