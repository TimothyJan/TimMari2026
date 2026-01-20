import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGenerator } from './random-generator';

describe('RandomGenerator', () => {
  let component: RandomGenerator;
  let fixture: ComponentFixture<RandomGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
