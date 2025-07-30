import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-management-system',
  templateUrl: './student-management-system.component.html',
  styleUrls: ['./student-management-system.component.scss']
})
export class StudentManagementSystemComponent implements OnInit {
  searchstudent:number=0;
  selectstudent:any=null
  viewstudent(student:Student){
    this.selectstudent=student

  }
  closeview(){
    this.selectstudent=null;
  }

  Students:Student[]=[]
  getstudent:Student=new Student();
  message:String=''
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
  deleteStudent(id: number) {
  if (confirm('Are you sure you want to delete this Student?')) {
    this.student.deleteStudent(id).subscribe({
      next: (message: string) => {
        alert(message);  // Shows "Student deleted successfully"
        this.getAllStudents(); // Refreshes the list
      },
      error: (err) => {
        console.error('Delete failed', err);
        alert('Error deleting student.');
      }
    });
  }

}
searcstudent(){
this.student.getstudentsbyid(this.searchstudent).subscribe({
  next: (data) => {
    this.getstudent = data;
  },
  error: (err) => {
    this.searchstudent = 0;
    this.message = "Student not found!";
  }
});
}


 

  
}
 
