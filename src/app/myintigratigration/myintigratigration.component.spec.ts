import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyintigratigrationComponent } from './myintigratigration.component';

describe('MyintigratigrationComponent', () => {
  let component: MyintigratigrationComponent;
  let fixture: ComponentFixture<MyintigratigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyintigratigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyintigratigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
