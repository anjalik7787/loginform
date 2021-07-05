import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignServiceService } from '../sign-service.service';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {

  constructor(private second :SignServiceService) { }
  userExist : boolean = false

  ngOnInit(): void {
  }
  
 
formid:any;
  form = new FormGroup({

    "name": new FormControl("",  [ Validators.min(6),Validators.maxLength(13),Validators.required]),
    "address": new FormControl("", []),
    "mobile": new FormControl(""),
    "userID": new FormControl("",),
    "password": new FormControl("", ),
    "Gender": new FormControl(""),
    "Nationality": new FormControl("")


  })
  



signUpUser(body:any){
  this.second.findUserByUserId(body.value.userID).subscribe(res=>
    {
      console.log(res)
      if(res.length==0)
      {
        this.second.SignUp(body).subscribe(res1=>{ console.log(res1) })
      }
      else this.userExist =  true;
      
  });
}

}
