import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  test = "How r u?";
  constructor(private http: HttpClient) {}

  // httpGet(url:any) {
  //   return this.http.get(url);
  // }

  // httpPost(url:any, {}) {
  //   return this.http.post(url, { name: "Subrat" });
  // }

  sendEmail(url:any, data:JSON) {

    console.log(data);
    return this.http.post(url, data,{responseType: 'text'});
    
    // return this.http.post<any>('http://localhost:3000/sendmail',data)
  }
}