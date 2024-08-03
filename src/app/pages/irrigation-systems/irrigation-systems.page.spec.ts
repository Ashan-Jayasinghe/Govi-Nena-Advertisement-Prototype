import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IrrigationSystemsPage } from './irrigation-systems.page';

describe('IrrigationSystemsPage', () => {
  let component: IrrigationSystemsPage;
  let fixture: ComponentFixture<IrrigationSystemsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationSystemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
