import { NameLocalisations, NameLocalisationsData } from './common';
import { Expose, Transform, Type, plainToClass } from 'class-transformer';
import * as moment from 'moment';
import { Moment } from 'moment';

export type VillagerPersonality = 'Cranky' | 'Jock' | 'Peppy' | 'Snooty' | 'Normal' | 'Smug' | 'Lazy' | 'Uchi';

export interface CatchPhraseLocalisation {
  'catch-USen': string;
  'catch-EUen': string;
  'catch-EUde': string;
  'catch-EUes': string;
  'catch-USes': string;
  'catch-EUfr': string;
  'catch-USfr': string;
  'catch-EUit': string;
  'catch-EUnl': string;
  'catch-CNzh': string;
  'catch-TWzh': string;
  'catch-JPja': string;
  'catch-KRko': string;
  'catch-EUru': string;
}

export interface VillagerData {
  id: number;
  'file-name': string;
  name: NameLocalisationsData;
  personality: VillagerPersonality;
  'birthday-string': string;
  birthday: string;
  species: string;
  gender: string;
  subtype: string;
  hobby: string;
  'catch-phrase': string;
  icon_uri: string;
  image_uri: string;
  'bubble-color': string;
  'text-color': string;
  saying: string;
  'catch-translations': CatchPhraseLocalisation;
}

export class Villager {
  @Expose() id: number;
  @Expose({ name: 'file-name' }) fileName: string;
  @Expose() @Transform((value) => plainToClass(NameLocalisations, value)) name: NameLocalisations;
  @Expose() personality: VillagerPersonality;
  @Expose() @Transform((value) => moment.utc(value, 'D/M')) birthday: Moment;
  @Expose() species: string;
  @Expose() gender: string;
  @Expose() subtype: string;
  @Expose() hobby: string;
  @Expose({ name: 'catch-phrase' }) catchPhrase: string;
  @Expose({ name: 'icon_uri' }) icon: string;
  @Expose({ name: 'image_uri' }) image: string;
  @Expose({ name: 'bubble-color' }) bubbleColour: string;
  @Expose({ name: 'text-color' }) textColour: string;
  @Expose() saying: string;
  @Expose({ name: 'catch-translations' }) catchLocalisations: CatchPhraseLocalisation;

  @Expose()
  get localisedName() {
    // TODO: Actually use localisation
    return this.name.enGB;
  }
}
