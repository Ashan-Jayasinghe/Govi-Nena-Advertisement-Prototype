import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesticidesPage } from './pesticides.page';

describe('PesticidesPage', () => {
  let component: PesticidesPage;
  let fixture: ComponentFixture<PesticidesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PesticidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
