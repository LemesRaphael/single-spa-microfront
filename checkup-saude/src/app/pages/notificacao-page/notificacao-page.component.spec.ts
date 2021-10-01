import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoPageComponent } from './notificacao-page.component';

describe('NotificacaoPageComponent', () => {
  let component: NotificacaoPageComponent;
  let fixture: ComponentFixture<NotificacaoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacaoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
