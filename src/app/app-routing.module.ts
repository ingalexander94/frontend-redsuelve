import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './components/bank/bank.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [
  { path: '', component: PersonComponent },
  { path: 'bank', component: BankComponent },
  { path: '*', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
