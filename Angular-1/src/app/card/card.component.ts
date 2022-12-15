import { User } from './../User.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(){}
  ngOnInit(): void {}
  @Input() user: User = new User();
}
