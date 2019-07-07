import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Login';

  constructor(private router:Router) {

  }

  ngOnInit() {
      document.title = this.title;
  }

  get route() {
      return this.router.url;
  }

  handleLogin() {

  }

  handlePasswdRecover() {

  }
}
