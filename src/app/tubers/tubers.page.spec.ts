import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TubersPage } from './tubers.page';

describe('TubersPage', () => {
  let component: TubersPage;
  let fixture: ComponentFixture<TubersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TubersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
