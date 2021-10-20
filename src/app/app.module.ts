import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { RoutingModule } from './routes/routing.module';
import { ChartsModule } from 'ng2-charts';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/globals/header/header.component';
import { SideNavComponent } from './components/globals/sideNav/sideNav.component';
import { FooterComponent } from './components/globals/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CasesComponent } from './components/cases/cases.component';
import { CasesViewComponent } from './components/cases/casesView.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SideNavComponent,  FooterComponent, DashboardComponent, CasesComponent, CasesViewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    DataTablesModule,
    ChartsModule,
    FullCalendarModule ,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
