import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignServiceService {
  constructor(private sign: HttpClient) {}

  /* @param userId
   * find user by userId */
  findUserByUserId(userId: any): Observable<any> {
  
    return this.sign.get('http://localhost:3000/signUP?userID=' + userId);
  }

  Select(): Observable<any> {
    return this.sign.get('http://localhost:3000/signUP');
  }

  SignUp(body: any): Observable<any> {
    return this.sign.post('http://localhost:3000/signUP', body);
  }

  // getUsers() : Observable<any> {
  //   return  this.http.get("http://localhost:3000/posts");
  // }

  // postUsers(body :any) : Observable <any>{
  //   return this.http.post("http://localhost:3000/posts" , body);
  // }
}
