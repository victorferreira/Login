import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwComponent } from './sw.component';

describe('SwComponent', () => {
  let component: SwComponent;
  let fixture: ComponentFixture<SwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
