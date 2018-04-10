import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompetitionItemComponent } from './admin-competition-item.component';

describe('AdminCompetitionItemComponent', () => {
  let component: AdminCompetitionItemComponent;
  let fixture: ComponentFixture<AdminCompetitionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompetitionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompetitionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
