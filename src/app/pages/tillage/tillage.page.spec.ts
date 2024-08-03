import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TillagePage } from './tillage.page';

describe('TillagePage', () => {
  let component: TillagePage;
  let fixture: ComponentFixture<TillagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TillagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
