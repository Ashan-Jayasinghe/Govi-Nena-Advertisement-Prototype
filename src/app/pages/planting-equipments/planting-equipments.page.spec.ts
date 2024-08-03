import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantingEquipmentsPage } from './planting-equipments.page';

describe('PlantingEquipmentsPage', () => {
  let component: PlantingEquipmentsPage;
  let fixture: ComponentFixture<PlantingEquipmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantingEquipmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
