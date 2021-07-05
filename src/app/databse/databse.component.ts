import { Component, OnInit } from '@angular/core';
import { SignServiceService } from '../sign-service.service';

@Component({
  selector: 'app-databse',
  templateUrl: './databse.component.html',
  styleUrls: ['./databse.component.css']
})
export class DatabseComponent implements OnInit {

  constructor(private datalist : SignServiceService) { 
   this. getuser();
  }

  ngOnInit(): void {
  }

  myarr :Array<any> =[];
  
getuser(){
  return this.datalist.Select().subscribe(res=>{this.myarr=res;})
}
 

}
