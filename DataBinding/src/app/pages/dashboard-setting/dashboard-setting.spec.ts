import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardSetting } from './dashboard-setting';

describe('DashboardSetting', () => {
  let component: DashboardSetting;
  let fixture: ComponentFixture<DashboardSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSetting],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSetting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
