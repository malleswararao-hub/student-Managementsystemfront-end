import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  student:Student=new Student();
  errorMessage: string = '';

  constructor(private rot:Router,private studentservice:StudentService){}
    getfirstpage():boolean{
    return this.rot.url.startsWith('/register');
  }
  getfinal():boolean{
      return this.rot.url.startsWith('/final');}
    golast(){  
      this.rot.navigate(['/final'])
    }
    gofirst(){
      this.rot.navigate(['/register'])
    }
    onSubmit(){
      this.studentservice.poststudents(this.student).subscribe({
        next:(stu)=>{
          this.student=new Student();
          console.log("Student added sucessfully")
          this.rot.navigate(['/student'])
        },
        error: (err) => {

              console.error(err);
              this.student=new Student();
              this.errorMessage = err.error.message||"student already exists"
         }
      })

    }
 


}
