import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuportePageComponent } from './suporte-page.component';

describe('SuportePageComponent', () => {
  let component: SuportePageComponent;
  let fixture: ComponentFixture<SuportePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuportePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuportePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
