import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './register/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

//   constructor(private http: HttpClient) { 

//   }
//   private myurl= 'http://localhost/4000';

//   getData(name:String,email:String):Observable<any>
//   {
 

//     const mygeturl=this.myurl+"?"+'name='+name+"&" +"email="+email;
//     return this.http.get<any>(mygeturl)
//   }
    
_url='http;//localhost:3000/insert';

constructor(private http:HttpClient){

}

enroll(user:User)
{
    console.log(this._url);
    // return this._http.post<any>(this._url,user)

    return this.http.post<any>('http://localhost:3000/insert',user)
}
  
}
