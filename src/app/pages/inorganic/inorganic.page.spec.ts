import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InorganicPage } from './inorganic.page';

describe('InorganicPage', () => {
  let component: InorganicPage;
  let fixture: ComponentFixture<InorganicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InorganicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
