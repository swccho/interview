import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color} from 'ng2-charts';
import { CalendarOptions } from '@fullcalendar/angular';
import {environment} from '../../../environments/environment';

declare let $: any;

let calendarRatio = 1.85;
let screenWidth = $(window).width()
if(screenWidth < 1300){
  calendarRatio = 1.5
}
if(screenWidth < 1100){
  calendarRatio = 1.5
}
if(screenWidth < 991){
  calendarRatio = 1.2
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  title = 'interview';
  ENV = environment;


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    aspectRatio: calendarRatio
  };

  // Doughnut
  public doughnutChartLabels: Label[] = ['one', 'two', 'three', 'four'];
  public doughnutChartData: MultiDataSet = [[5, 5, 5, 90]];
  public doughnutChartColors: Color[] = [{backgroundColor: ['#92CFA6', '#81D9EE', '#FEE28C', '#FDA7C6']}]
  public doughnutChartType: ChartType = 'doughnut';


  constructor() {

  }

  ngOnInit() {

  }
}
