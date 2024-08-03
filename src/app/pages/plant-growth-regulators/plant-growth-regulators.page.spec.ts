import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantGrowthRegulatorsPage } from './plant-growth-regulators.page';

describe('PlantGrowthRegulatorsPage', () => {
  let component: PlantGrowthRegulatorsPage;
  let fixture: ComponentFixture<PlantGrowthRegulatorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantGrowthRegulatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
