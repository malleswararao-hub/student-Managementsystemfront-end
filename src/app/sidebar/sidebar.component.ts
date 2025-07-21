import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
     constructor (private router: Router){}
     openUpdate(){
      this.router.navigate(['up1'])
     }
      openstudent(){
    this.router.navigate(['student'])
  }
  openRegister(){
    this.router.navigate(['register'])
  }


}
