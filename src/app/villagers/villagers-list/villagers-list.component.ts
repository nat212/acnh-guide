import { Component, OnInit } from '@angular/core';
import { VillagerService } from '@src/app/services/villager.service';
import { Observable } from 'rxjs';
import { Villager } from '@src/app/models/villager';

@Component({
  selector: 'app-villagers-list',
  templateUrl: './villagers-list.component.html',
  styleUrls: ['./villagers-list.component.scss'],
})
export class VillagersListComponent implements OnInit {
  villagers$: Observable<Villager[]>;

  constructor(private villagers: VillagerService) {}

  ngOnInit(): void {
    this.villagers$ = this.villagers.getVillagers();
  }
}
