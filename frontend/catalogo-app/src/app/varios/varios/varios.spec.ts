import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Varios } from './varios';

describe('Varios', () => {
  let component: Varios;
  let fixture: ComponentFixture<Varios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Varios],
    }).compileComponents();

    fixture = TestBed.createComponent(Varios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
