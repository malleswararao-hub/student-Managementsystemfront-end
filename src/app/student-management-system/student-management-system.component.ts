import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-management-system',
  templateUrl: './student-management-system.component.html',
  styleUrls: ['./student-management-system.component.scss']
})
export class StudentManagementSystemComponent implements OnInit {

  Students:Student[]=[]
  constructor(private student:StudentService){}
  ngOnInit(): void {
   this.getAllStudents();
  }
  a=0;

  getAllStudents(){
    this.student.getAllStudents().subscribe(
      (data:Student[])=>{
        this.Students=data;
        console.log(this.Students);
      },
      (error)=>{
        console.log("This was an error");
      }
    )

  }
}
