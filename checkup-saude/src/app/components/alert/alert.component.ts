import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  @Input() type = 'success';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  close():void {
    this.bsModalRef.hide();
  }
}
