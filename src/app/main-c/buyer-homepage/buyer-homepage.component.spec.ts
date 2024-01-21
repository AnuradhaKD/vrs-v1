import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerHomepageComponent } from './buyer-homepage.component';

describe('BuyerHomepageComponent', () => {
  let component: BuyerHomepageComponent;
  let fixture: ComponentFixture<BuyerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerHomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
