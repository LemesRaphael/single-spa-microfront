import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaConsultaPageComponent } from './agenda-consulta-page.component';

describe('AgendaConsultaPageComponent', () => {
  let component: AgendaConsultaPageComponent;
  let fixture: ComponentFixture<AgendaConsultaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaConsultaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaConsultaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
