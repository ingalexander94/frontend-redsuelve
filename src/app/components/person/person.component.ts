import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { showMessage } from 'src/app/helpers/alert';
import { AddPersonAction } from 'src/app/reducers/person/person.actions';
import {
  FinishLoadingAction,
  StartLoadingAction,
} from 'src/app/reducers/ui/ui.actions';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [],
})
export class PersonComponent implements OnInit, OnDestroy {
  createFormPerson() {
    return new FormGroup({
      names: new FormControl('', Validators.required),
      surnames: new FormControl('', Validators.required),
      age: new FormControl('1', [
        Validators.required,
        Validators.min(1),
        Validators.max(150),
      ]),
      identification: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),
        Validators.pattern(/^([0-9])*$/),
      ]),
      birthday: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  formPerson: FormGroup;
  loading: boolean = false;
  today: Date = new Date();
  uiSubscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private personService: PersonService
  ) {
    this.formPerson = this.createFormPerson();
  }

  ngOnInit(): void {
    this.store
      .select('ui')
      .subscribe(({ loading }) => (this.loading = loading));
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }

  async onSubmit() {
    this.store.dispatch(new StartLoadingAction());
    if (this.formPerson.valid) {
      const data = await this.personService.createPerson(this.formPerson.value);
      if (data.ok) {
        this.store.dispatch(new AddPersonAction(data.person));
        this.formPerson.reset();
        showMessage('success', data.msg);
      } else {
        showMessage('error', data.msg);
      }
    }
    this.store.dispatch(new FinishLoadingAction());
  }

  get names() {
    return this.formPerson.get('names');
  }
  get surnames() {
    return this.formPerson.get('surnames');
  }
  get age() {
    return this.formPerson.get('age');
  }
  get identification() {
    return this.formPerson.get('identification');
  }
  get birthday() {
    return this.formPerson.get('birthday');
  }
  get email() {
    return this.formPerson.get('email');
  }
}
