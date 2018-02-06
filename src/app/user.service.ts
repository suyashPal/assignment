import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  constructor(private http:Http) {

}
getAllUser()
{
  return this.http.get('http://192.168.14.233:1000/api/v1/user/getAllUser').map(res=>res.json())
}

authenticateUser(userInfo)
{
      console.log(userInfo);
      return this.http.post('http://192.168.14.233:1000/api/v1/user/authenticateUser', userInfo)
      .map((response: Response) => response.json())
}
updateuserdetails(name,updateuser)
{
 return this.http.put('http://192.168.14.233:1000/api/v1/updateuserdetails/'+name,updateuser).map(res=>res.json())
}
getUserdeatils(id)
{
  return this.http.get('http://192.168.14.233:1000/api/v1/getuserdetails/'+ id).map(res=>res.json()) 
}
}