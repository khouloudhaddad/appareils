import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth = false;
  constructor(private service: AppareilService, private route:Router) {

   }

  ngOnInit(): void {
    this.isAuth = this.service.isAuth;
  }

  onLogin() {
    setTimeout(() => {
      this.service.isAuth = !this.service.isAuth;
      this.isAuth = this.service.isAuth;

      if (this.isAuth) {
        this.route.navigateByUrl('appareils');
      }
    },100)
  }

}
