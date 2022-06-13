import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/model/User';
import { userService } from 'src/service/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: Iuser = {
    username: "",
    password: ""
  }
  constructor(
    private userService: userService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }
  onSubmit(){
    this.userService.signIn(this.user).subscribe(data => {
      setTimeout( () => {
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl('/listUser')
      }, 2000)
    })
  }

}
