import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  check: boolean = false;

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['home']);
  }

  nav() {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

    if(this.check == false){
      document.getElementById('icon').classList.add("change");
      document.getElementById("menu").style.width = "100vw";

      tl.to('.overlay-content', 0, {opacity: 1})
      tl.to('.txt', .3, {y: "0%", delay: 1.2})
      tl.fromTo('h3, h4', .3, {opacity: 0}, {opacity: 1})
      tl.fromTo('a', .3, {opacity: 0}, {opacity: 1, stagger: .2})

      this.check = true;  
    }
    else{      
      tl.to('.overlay-content', .2, {opacity: 0})
      tl.to('.txt', 0, {y: "100%"})

      document.getElementById('icon').classList.remove("change");
      document.getElementById("menu").style.width = "0%";     
      this.check = false;
    }
  }
}
