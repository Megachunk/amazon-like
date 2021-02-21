import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterSidebarComponent } from './better-sidebar.component';

describe('BetterSidebarComponent', () => {
  let component: BetterSidebarComponent;
  let fixture: ComponentFixture<BetterSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
