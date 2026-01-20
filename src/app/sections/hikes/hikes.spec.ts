import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hikes } from './hikes';

describe('Hikes', () => {
  let component: Hikes;
  let fixture: ComponentFixture<Hikes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hikes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hikes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
