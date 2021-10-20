import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {CasesComponent} from '../components/cases/cases.component';
import {CasesViewComponent} from '../components/cases/casesView.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'cases', component: CasesComponent},
  {path: 'cases/view', component: CasesViewComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
