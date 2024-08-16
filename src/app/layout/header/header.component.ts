import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isHome: boolean = false;

  constructor(private router: Router){}
  
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isHome = this.router.url === '/home';
    });
  }

  navigateTo(){
    if(this.isHome){
      this.router.navigate(['/login']);
    }
  }

}
