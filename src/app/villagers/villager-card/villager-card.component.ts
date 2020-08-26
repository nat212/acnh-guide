import { Component, OnInit, Input } from '@angular/core';
import { Villager } from '@src/app/models/villager';

@Component({
  selector: 'app-villager-card',
  templateUrl: './villager-card.component.html',
  styleUrls: ['./villager-card.component.scss'],
})
export class VillagerCardComponent implements OnInit {
  @Input() villager: Villager;

  constructor() {}

  ngOnInit(): void {}
}
