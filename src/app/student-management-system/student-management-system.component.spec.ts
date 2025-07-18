import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagementSystemComponent } from './student-management-system.component';

describe('StudentManagementSystemComponent', () => {
  let component: StudentManagementSystemComponent;
  let fixture: ComponentFixture<StudentManagementSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentManagementSystemComponent]
    });
    fixture = TestBed.createComponent(StudentManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
