import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

   constructor(private router: Router){}
  openHome(){
    this.router.navigate([''])
  }
  openstudent(){
    this.router.navigate(['student'])
  }
  openRegister(){
    this.router.navigate(['register'])
  }

}
