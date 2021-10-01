import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoAtendimentoComponent } from './avaliacao-atendimento.component';

describe('AvaliacaoAtendimentoComponent', () => {
  let component: AvaliacaoAtendimentoComponent;
  let fixture: ComponentFixture<AvaliacaoAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
