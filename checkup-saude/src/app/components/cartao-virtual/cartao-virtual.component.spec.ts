import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoVirtualComponent } from './cartao-virtual.component';

describe('CartaoVirtualComponent', () => {
  let component: CartaoVirtualComponent;
  let fixture: ComponentFixture<CartaoVirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoVirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
