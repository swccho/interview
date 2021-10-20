import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{
  title = 'interview';
  ENV = environment;

  ngOnInit(): void {
    const toggle = document.getElementById('sidebar');
    const button = document.querySelector('.toggle_button');

    button.addEventListener('click', () => {
      toggle.classList.toggle('active');
    });
  }
}
