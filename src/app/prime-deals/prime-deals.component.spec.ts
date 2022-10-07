import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeDealsComponent } from './prime-deals.component';

describe('PrimeDealsComponent', () => {
  let component: PrimeDealsComponent;
  let fixture: ComponentFixture<PrimeDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeDealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
