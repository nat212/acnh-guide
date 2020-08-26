import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { VillagerData, Villager } from '@src/app/models/villager';
import { map, tap } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})
export class VillagerService {
  private villagerUri = `${environment.apiUrl}/villagers`;

  constructor(private http: HttpClient) {}

  getVillagers() {
    return this.http.get<{ [key: string]: VillagerData }>(this.villagerUri).pipe(
      map((villagers) => Object.keys(villagers).map((k) => villagers[k])),
      map((villagers) => villagers.map((v) => plainToClass(Villager, v, { excludeExtraneousValues: true }))),
    );
  }
}
