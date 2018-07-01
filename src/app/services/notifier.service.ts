import { Injectable } from '@angular/core';
import { History } from '../models/History';
import { Subject } from 'rxjs';

@Injectable()
export class NotifierService {

  private _encodingDone: Subject<History>;

  constructor() {
    this._encodingDone = new Subject<History>();
  }

  public get encodingDone(): Subject<History> {
    return this._encodingDone;
  }

  public notifyEncodingDone(history: History): void  {
    this._encodingDone.next(history);
  }
}
