import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TractorsPage } from './tractors.page';

describe('TractorsPage', () => {
  let component: TractorsPage;
  let fixture: ComponentFixture<TractorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TractorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
