import { Component, Input, OnInit } from '@angular/core';
import { data } from '../gallery/models/data.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  photo?: data;

  like = false;

  liked() {
    this.like = !this.like
  }

  constructor() { }

  ngOnInit(): void {
  }

}
