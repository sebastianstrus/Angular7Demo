import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorwegianComponent } from './norwegian.component';

describe('NorwegianComponent', () => {
  let component: NorwegianComponent;
  let fixture: ComponentFixture<NorwegianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorwegianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorwegianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
