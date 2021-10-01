import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.scss']
})

export class SuporteComponent implements OnInit {

  email: string;
  text: string;

  constructor() { }

  ngOnInit(){

  }

  enviar(): void {
    alert(this.email);
    alert(this.text)
  }
}
