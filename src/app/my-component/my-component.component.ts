import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  private username;
  private password;
  constructor(@Inject('auth') private auth: AuthService) { }

  ngOnInit() {
  }

  clickme(username, password) {
    console.log(username + "----" + password);
    console.log(this.auth.loginWithCredentials(username, password));
  }

  submitme(formValue) {
    console.log(formValue);
    // {username: "dottie", password: "123123"}
  }

  clicktest() {
    console.log(this.username + "...." + this.password);
  }
}
