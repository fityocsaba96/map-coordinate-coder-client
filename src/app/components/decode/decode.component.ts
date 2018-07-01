import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../services/code.service';
import { NotifierService } from '../../services/notifier.service';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css']
})
export class DecodeComponent implements OnInit {

  public encoded: string;

  constructor(
    private codeService: CodeService,
    private notifierService: NotifierService
  ) { }

  ngOnInit() {
    this.notifierService.encodingDone.subscribe(history => {
      this.encoded = history.code;
    });
  }

  public decode(code: string, event: Event): void {
    event.preventDefault();
    this.codeService.decode(code)
      .subscribe(response => {
        this.notifierService.notifyDecodingDone({ code, coordinate: response });
      });
  }
}
