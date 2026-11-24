import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Notfounf } from './notfound';

describe('Notfounf', () => {
  let component: Notfounf;
  let fixture: ComponentFixture<Notfounf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notfounf],
    }).compileComponents();

    fixture = TestBed.createComponent(Notfounf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
