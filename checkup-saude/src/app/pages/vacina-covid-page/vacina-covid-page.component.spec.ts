import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaCovidPageComponent } from './vacina-covid-page.component';

describe('VacinaCovidPageComponent', () => {
  let component: VacinaCovidPageComponent;
  let fixture: ComponentFixture<VacinaCovidPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacinaCovidPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaCovidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
