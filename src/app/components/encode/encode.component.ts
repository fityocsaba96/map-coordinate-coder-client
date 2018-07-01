import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../services/code.service';
import { NotifierService } from '../../services/notifier.service';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent implements OnInit {

  constructor(
    private codeService: CodeService,
    private notifierService: NotifierService
  ) { }

  ngOnInit() {
  }

  public encode(latitude: string, longitude: string, accuracy: string, event: Event): void {
    event.preventDefault();
    const coordinate = { latitude: Number(latitude), longitude: Number(longitude) };
    this.codeService.encode(coordinate, Number(accuracy))
      .subscribe(response => {
        this.notifierService.notifyEncodingDone({ coordinate, code: response.code });
      });
  }
}
