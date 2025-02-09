import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  public url: string = '';

  constructor(private router: Router){
     this.url = this.router.url;
  }

  ngOnInit(): void {
    
  }

  goToHome(){
    this.router.navigateByUrl('/index');
  }

  goToProjects(){
    this.router.navigateByUrl('/projects');
  }
}
