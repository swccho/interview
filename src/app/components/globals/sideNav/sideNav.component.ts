import { Component } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sideNav.component.html',
})
export class SideNavComponent {
  title = 'interview';
  ENV = environment;
}
