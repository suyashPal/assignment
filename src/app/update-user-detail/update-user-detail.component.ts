import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-update-user-detail',
  templateUrl: './update-user-detail.component.html',
  styleUrls: ['./update-user-detail.component.css']
})
export class UpdateUserDetailComponent implements OnInit {
user_id: string;
name: string;
password: string;
modify_date: string;
update_msg:string;
  constructor(private router: Router, private route: ActivatedRoute , private user: UserService) { 
    this.route.params.subscribe(params => {
      this.user_id = params['id'];
    });
    console.log(this.user_id);
    this.user.getUserdeatils(this.user_id).subscribe((response)=>{
      console.log(response);
      this.name=response.data.name;
      this.password=response.data.password;
      this.modify_date=response.data.updated_at;
    })
  }
  updateDetail(name,password,modify_date)
  {
    console.log(name+" "+password+" "+modify_date);
    var newUser={
			name:name,
			password:password,
			updated_at:modify_date
    }
    this.user.updateuserdetails(this.user_id,newUser).subscribe((response)=>{
      console.log(response);
      if(response.success===true)
      {
        this.update_msg=response.message;
        this.router.navigate(['\dashboard'])
      }
      if(response.success===false)
      {
        this.update_msg=response.message;
      }
    })

  }
  logout(){
    localStorage.removeItem('activeUser');
    localStorage.removeItem('user');
    this.router.navigate([''])
  }
  ngOnInit() {
  }

}



