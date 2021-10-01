import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaVacinaComponent } from './agenda-vacina.component';

describe('AgendaVacinaComponent', () => {
  let component: AgendaVacinaComponent;
  let fixture: ComponentFixture<AgendaVacinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaVacinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
