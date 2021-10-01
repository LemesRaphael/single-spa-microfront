import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoVirtualPageComponent } from './cartao-virtual-page.component';

describe('CartaoVirtualPageComponent', () => {
  let component: CartaoVirtualPageComponent;
  let fixture: ComponentFixture<CartaoVirtualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoVirtualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoVirtualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
