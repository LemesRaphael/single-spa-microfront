import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaCovidComponent } from './vacina-covid.component';

describe('VacinaCovidComponent', () => {
  let component: VacinaCovidComponent;
  let fixture: ComponentFixture<VacinaCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacinaCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
