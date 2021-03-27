import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import Person from 'src/app/interfaces/Person';
import {
  ActivePersonAction,
  LoadPersonAction,
} from 'src/app/reducers/person/person.actions';
import { AccountService } from 'src/app/services/account.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-table-person',
  templateUrl: './table-person.component.html',
  styles: [],
})
export class TablePersonComponent implements OnInit, OnDestroy {
  persons: Person[];
  personSubscription: Subscription = new Subscription();
  constructor(
    private store: Store<AppState>,
    private personService: PersonService,
    private accountService: AccountService
  ) {
    this.loadPersons();
  }

  ngOnInit(): void {
    this.personSubscription = this.store
      .select('person')
      .subscribe(({ persons }) => (this.persons = persons));
  }

  ngOnDestroy(): void {
    this.personSubscription.unsubscribe();
  }

  async loadPersons() {
    const data: any = await this.personService.loadPerson();
    if (data.ok) {
      this.store.dispatch(new LoadPersonAction(data.persons));
    }
  }

  async loadAccountsByPerson(id: String, person: Person) {
    const data = await this.accountService.loadAccountsByPerson(id);
    if (data.ok) {
      this.store.dispatch(
        new ActivePersonAction({ person, accounts: data.accounts })
      );
    }
  }
}
