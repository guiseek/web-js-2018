import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users;
  alert = {};
  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.users = this.usersService.list();
  }
  submit(user) {
    console.log('user: ', user);
    this.usersService.save(user).subscribe(res => {
      console.log('res: ', res);
      this.alert = res;
      setTimeout(() => {
        this.alert = null;
      }, 5000);
      this.getUsers();
    })
  }
}
