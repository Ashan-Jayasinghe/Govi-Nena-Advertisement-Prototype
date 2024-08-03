import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeedlingsPage } from './seedlings.page';

describe('SeedlingsPage', () => {
  let component: SeedlingsPage;
  let fixture: ComponentFixture<SeedlingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedlingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
