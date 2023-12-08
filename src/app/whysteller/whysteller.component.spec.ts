import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhystellerComponent } from './whysteller.component';

describe('WhystellerComponent', () => {
  let component: WhystellerComponent;
  let fixture: ComponentFixture<WhystellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhystellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhystellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
