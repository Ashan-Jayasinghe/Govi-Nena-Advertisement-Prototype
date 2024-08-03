import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeedsPage } from './seeds.page';

describe('SeedsPage', () => {
  let component: SeedsPage;
  let fixture: ComponentFixture<SeedsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
