import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpService } from "./http.service";
import { FormControl } from '@angular/forms';


import { Register } from './register.model';
import { User } from './user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  userModel= new User('','')
  loading = false;
  buttionText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);





  




  constructor (private _myserviceService:MyserviceService,public http: HttpService){

  }
  


  

  submit()
  {
    
    this._myserviceService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => console.log('Error')
      )
  }

  register() {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      "name": this.nameFormControl.value,
      "email": this.emailFormControl.value,
    
      
    }
    const user2=JSON.parse(JSON.stringify(user))
    //console.log(user);
    this.http.sendEmail("http://localhost:5000/sendmail", user2).subscribe(
      data => {
        let res:any = data; 
        
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );

  
  
}


  
  
}






