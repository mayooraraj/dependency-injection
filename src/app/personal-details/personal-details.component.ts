import { Component } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {

  personal:any[]=[];

  constructor(private emppersonal:DetailsService){}

  ngOnInit():void{
    this.personal = this.emppersonal?.personaldetails();
  }
}
