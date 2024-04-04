import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamdetailsComponent } from './teamdetails.component';

describe('TeamdetailsComponent', () => {
  let component: TeamdetailsComponent;
  let fixture: ComponentFixture<TeamdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamdetailsComponent]
    });
    fixture = TestBed.createComponent(TeamdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
