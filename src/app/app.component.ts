import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  user = new User();
  users = [];

  onSubmit() {
  	this.user.id = this.users.length + 1;
  	this.users.push(this.user);
  	this.registered = this.user;
  	console.log(this.registered);
  	this.user = new User();
  }
}
