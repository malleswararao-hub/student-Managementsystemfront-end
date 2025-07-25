import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

  baseurl='http://localhost:8080'
  constructor(private http:HttpClient) { }

  getAllStudents():Observable<Student[]>{
   return this.http.get<Student[]>(`${this.baseurl}/getstudents`)
  }

  poststudents(student:Student):Observable<Student>{
    return this.http.post<Student>(`${this.baseurl}/addstudent`,student)
  }

  


deleteStudent(id: number): Observable<string> {
  return this.http.delete(`${this.baseurl}/deletestudent?id=${id}`, { responseType: 'text'}
   
  ) ;
}

  

}
