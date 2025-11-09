import { Component, signal } from '@angular/core';
import { materialModules } from '../material.module';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [materialModules, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
year: number = new Date().getFullYear();
 hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
