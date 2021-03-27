import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Formularios reactivos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Redux
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { combineReducer } from './app.reducer';

// Rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PersonComponent } from './components/person/person.component';
import { BankComponent } from './components/bank/bank.component';
import { TableBankComponent } from './components/partials/table-bank/table-bank.component';
import { TablePersonComponent } from './components/partials/table-person/table-person.component';
import { ModalPersonComponent } from './components/partials/modal-person/modal-person.component';
import { TableAccountComponent } from './components/partials/table-account/table-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonComponent,
    BankComponent,
    TableBankComponent,
    TablePersonComponent,
    ModalPersonComponent,
    TableAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(combineReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
