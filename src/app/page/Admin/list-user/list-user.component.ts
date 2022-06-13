import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from 'src/service/user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  
  userList!: Iuser[]
  constructor(
    private userService: userService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.showUser()
   }

  ngOnInit(): void {
  }
  showUser(){
    this.userService.listUser().subscribe(data => {
      this.userList = data  
    })
  }
  onRemove(id:any){
    const confirm = window.confirm('Bạn có muốn xoá không ?')
    if(confirm){
      this.userService.deleteUser(id).subscribe(data => {
        this.userList = this.userList.filter(item => item.id !== id)
      })
    }
    
    
  }

}
