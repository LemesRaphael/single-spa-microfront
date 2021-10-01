import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasAgendadasPageComponent } from './consultas-agendadas-page.component';

describe('ConsultasAgendadasPageComponent', () => {
  let component: ConsultasAgendadasPageComponent;
  let fixture: ComponentFixture<ConsultasAgendadasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasAgendadasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasAgendadasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
