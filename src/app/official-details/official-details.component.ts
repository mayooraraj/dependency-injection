import { Component } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-official-details',
  templateUrl: './official-details.component.html',
  styleUrls: ['./official-details.component.scss']
})
export class OfficialDetailsComponent {

  official:any[] =[];

constructor(private empofficial:DetailsService){}

ngOnInit():void{
  this.official = this.empofficial?.officialdetails();
}
}
