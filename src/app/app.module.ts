import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { DbStorageService } from '@src/app/services/db-storage.service';
import { IndexeddbStorageService } from '@src/app/services/indexeddb-storage.service';
import { WebSettingsService } from '@src/app/services/web-settings.service';
import { SettingsService } from '@src/app/services/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { VillagerCardComponent } from '@src/app/villagers/villager-card/villager-card.component';
import { VillagersListComponent } from '@src/app/villagers/villagers-list/villagers-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, VillagerCardComponent, VillagersListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: DbStorageService, useClass: IndexeddbStorageService },
    { provide: SettingsService, useClass: WebSettingsService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
