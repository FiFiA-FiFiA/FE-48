import { Server } from './../Server.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-server',
  templateUrl: './section-server.component.html',
  styleUrls: ['./section-server.component.css']
})
export class SectionServerComponent {
  @Input() ServerArr: Server[] = [];
}
