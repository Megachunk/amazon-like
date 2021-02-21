import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyagainListComponent } from './buyagain-list.component';

describe('BuyagainListComponent', () => {
  let component: BuyagainListComponent;
  let fixture: ComponentFixture<BuyagainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyagainListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyagainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
