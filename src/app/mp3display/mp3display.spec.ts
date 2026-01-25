import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3display } from './mp3display';

describe('Mp3display', () => {
  let component: Mp3display;
  let fixture: ComponentFixture<Mp3display>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mp3display]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mp3display);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
