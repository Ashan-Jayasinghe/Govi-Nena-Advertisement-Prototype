import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineriesPage } from './machineries.page';

describe('MachineriesPage', () => {
  let component: MachineriesPage;
  let fixture: ComponentFixture<MachineriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
