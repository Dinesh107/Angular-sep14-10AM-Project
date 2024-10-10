import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloStudentsComponent } from './hello-students.component';

describe('HelloStudentsComponent', () => {
  let component: HelloStudentsComponent;
  let fixture: ComponentFixture<HelloStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
