import { Component } from '@angular/core';
import { materialModules } from '../material.module';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-layout',
 providers: [provideNativeDateAdapter()],
  imports: [materialModules],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
