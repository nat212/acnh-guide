import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class SettingsService {
  constructor() {}
  abstract getNumber(key: string, defaultValue?: number): number;
  abstract getString(key: string, defaultValue?: string): string;
  abstract getBoolean(key: string, defaultValue?: boolean): boolean;
}
