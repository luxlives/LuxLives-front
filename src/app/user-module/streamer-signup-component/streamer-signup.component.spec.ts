import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerSignupComponent } from './streamer-signup.component';

describe('StreamerSignupComponent', () => {
  let component: StreamerSignupComponent;
  let fixture: ComponentFixture<StreamerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
