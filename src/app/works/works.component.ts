import { Component, OnInit } from '@angular/core';
import { TimelineLite } from 'gsap';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.worksTransition();
  }

  worksTransition() {
    const tl: TimelineLite = new TimelineLite({defaults: {ease: 'power1.out'}});

    tl.to('.text, .subtitle', 0, {display: "inline-block"})
    tl.to('.text', .5, {y: "0%", stagger: .1});
    tl.to('.subtitle', .5, {opacity: 1, stagger: .1});
    tl.fromTo('.cto', .5, {opacity: 0}, {opacity: 1})
  }

}
