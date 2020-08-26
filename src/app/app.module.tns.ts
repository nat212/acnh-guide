import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { DbStorageService } from '@src/app/services/db-storage.service';
import { CouchdbStorageService } from '@src/app/services/couchdb-storage.service';
import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { SettingsService } from '@src/app/services/settings.service';
import { AppSettingsService } from '@src/app/services/app-settings.service';
import { VillagerCardComponent } from '@src/app/villagers/villager-card/villager-card.component';
import { VillagersListComponent } from '@src/app/villagers/villagers-list/villagers-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, VillagerCardComponent, VillagersListComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptHttpClientModule, NativeScriptFormsModule],
  providers: [
    { provide: DbStorageService, useClass: CouchdbStorageService },
    { provide: SettingsService, useClass: AppSettingsService },
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
