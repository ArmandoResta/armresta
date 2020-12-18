import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.landingTransition();
  }


  landingTransition() {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

    tl.to('.intro', .2, {background: "#202527", delay: .5})
    tl.to('.logo-intro', .1, {opacity: 1, width: "65px"})
    tl.to('.logo-intro', .2, {width: "40px"})
    tl.fromTo('.logo-intro', .5, {}, {opacity: 0, display: "none", delay: .5})

    tl.to('.text1', .5, {display: "inline-block"})
    tl.to('.text1', .3, {y: "0%", stagger: .1})
    tl.to('.text1', .3, {opacity: .0, delay: .5})

    tl.to('.text1', 0, {display: "none"})

    tl.to('.text2', .5, {display: "inline-block"})
    tl.to('.text2', .3, {y: "0%", stagger: .1})
    tl.to('.text2', .3, {opacity: .4})

    tl.to('.text3', 0, {display: "inline-block"})

    tl.to('.text3', .3, {y: "0%", stagger: .1})
    tl.to('.text3', .3, {opacity: .4})
    tl.to('.text2, .text3', .2, {opacity: 0, delay: .8})

    tl.to('.slider', 1, {y: "-100%", delay: 0.5});
    tl.to('.intro', 1, {y: "-100%"}, "-=1");

    tl.fromTo('header', 1, {opacity: 0}, {opacity: 1});

    tl.to('.text, .subtitle', 0, {display: "inline-block"})
    tl.to('.text', .5, {y: "0%", stagger: .1});
    tl.to('.subtitle', .5, {opacity: 1, stagger: .1});
    tl.fromTo('.cto', .5, {opacity: 0}, {opacity: 1})
  }

}
