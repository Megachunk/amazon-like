import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourOrderListComponent } from './your-order-list.component';

describe('YourOrderListComponent', () => {
  let component: YourOrderListComponent;
  let fixture: ComponentFixture<YourOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
