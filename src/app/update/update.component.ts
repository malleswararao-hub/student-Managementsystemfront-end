import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  constructor(private rot:Router){}
  getfirstpage():boolean{
  return this.rot.url.startsWith('/up1');
}
getfinal():boolean{
    return this.rot.url.startsWith('/updatefinal');
}

}

