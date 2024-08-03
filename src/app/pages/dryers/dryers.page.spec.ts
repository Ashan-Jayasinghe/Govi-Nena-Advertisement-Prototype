import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryersPage } from './dryers.page';

describe('DryersPage', () => {
  let component: DryersPage;
  let fixture: ComponentFixture<DryersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DryersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
