import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprayersPage } from './sprayers.page';

describe('SprayersPage', () => {
  let component: SprayersPage;
  let fixture: ComponentFixture<SprayersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SprayersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
