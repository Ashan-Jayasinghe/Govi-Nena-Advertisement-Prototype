import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarvestingEquipmentsPage } from './harvesting-equipments.page';

describe('HarvestingEquipmentsPage', () => {
  let component: HarvestingEquipmentsPage;
  let fixture: ComponentFixture<HarvestingEquipmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestingEquipmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
