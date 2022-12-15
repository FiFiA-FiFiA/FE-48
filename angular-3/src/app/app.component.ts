import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Server } from './Server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}