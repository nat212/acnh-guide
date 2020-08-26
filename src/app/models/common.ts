import { Expose } from 'class-transformer';

export interface NameLocalisationsData {
  'name-USen': string;
  'name-EUen': string;
  'name-EUde': string;
  'name-EUes': string;
  'name-USes': string;
  'name-EUfr': string;
  'name-USfr': string;
  'name-EUit': string;
  'name-EUnl': string;
  'name-CNzh': string;
  'name-TWzh': string;
  'name-JPja': string;
  'name-KRko': string;
  'name-EUru': string;
}

export class NameLocalisations {
  @Expose({ name: 'name-USen' }) enUS: string;
  @Expose({ name: 'name-EUen' }) enGB: string;
  @Expose({ name: 'name-EUde' }) deDE: string;
  @Expose({ name: 'name-EUes' }) esES: string;
  @Expose({ name: 'name-USes' }) esMX: string;
  @Expose({ name: 'name-EUfr' }) frFR: string;
  @Expose({ name: 'name-USfr' }) frCA: string;
  @Expose({ name: 'name-EUit' }) itIT: string;
  @Expose({ name: 'name-EUnl' }) nlNL: string;
  @Expose({ name: 'name-CNzh' }) zhCN: string;
  @Expose({ name: 'name-TWzh' }) zhTW: string;
  @Expose({ name: 'name-JPja' }) jaJP: string;
  @Expose({ name: 'name-KRko' }) koKR: string;
  @Expose({ name: 'name-EUru' }) ruRU: string;
}
