import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraVacinasPageComponent } from './carteira-vacinas-page.component';

describe('CarteiraVacinasPageComponent', () => {
  let component: CarteiraVacinasPageComponent;
  let fixture: ComponentFixture<CarteiraVacinasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteiraVacinasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraVacinasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
