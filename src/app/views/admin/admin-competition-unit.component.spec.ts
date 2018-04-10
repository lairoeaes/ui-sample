import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompetitionUnitComponent } from './admin-competition-unit.component';

describe('AdminCompetitionUnitComponent', () => {
  let component: AdminCompetitionUnitComponent;
  let fixture: ComponentFixture<AdminCompetitionUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompetitionUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompetitionUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
