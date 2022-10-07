import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMComponent } from './cart-m.component';

describe('CartMComponent', () => {
  let component: CartMComponent;
  let fixture: ComponentFixture<CartMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
