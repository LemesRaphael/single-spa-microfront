import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-consulta-page',
  templateUrl: './agenda-consulta-page.component.html',
  styleUrls: ['./agenda-consulta-page.component.scss']
})
export class AgendaConsultaPageComponent implements OnInit {

  user: string;
  constructor(private route: Router) { }

  ngOnInit() {
    this.user = "Raphael Lemes"
  }
}
