import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo: any = {};

  constructor( private user: UserService, private router: Router) { }

  ngOnInit() {
  }
  onAuthentication(id, password) {
    console.log(id, password);
    this.userInfo = {
     id: id,
     password: password
    }
    console.log(this.userInfo);
    let that = this;
    this.user.authenticateUser(this.userInfo).subscribe(
      function (response){
        let nextThat = that;
           console.log(response);
         console.log(response.success);
         if (response.success === true)
         {
             localStorage.setItem('user', response.data.role);
             localStorage.setItem('activeUser', response.data.id);
             console.log('inside the success');
             nextThat.router.navigate(['\dashboard']);
         }
         if (response.success === false)
           alert(response.messsage);
      })
  }
}
