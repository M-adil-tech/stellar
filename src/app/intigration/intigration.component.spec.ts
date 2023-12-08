import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntigrationComponent } from './intigration.component';

describe('IntigrationComponent', () => {
  let component: IntigrationComponent;
  let fixture: ComponentFixture<IntigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
