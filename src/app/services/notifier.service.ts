import { Injectable } from '@angular/core';
import { History } from '../models/History';
import { Subject } from 'rxjs';

@Injectable()
export class NotifierService {

  private _encodingDone: Subject<History>;
  private _decodingDone: Subject<History>;

  constructor() {
    this._encodingDone = new Subject<History>();
    this._decodingDone = new Subject<History>();
  }

  public get encodingDone(): Subject<History> {
    return this._encodingDone;
  }

  public notifyEncodingDone(history: History): void  {
    this._encodingDone.next(history);
  }

  public get decodingDone(): Subject<History> {
    return this._decodingDone;
  }

  public notifyDecodingDone(history: History): void  {
    this._decodingDone.next(history);
  }
}
