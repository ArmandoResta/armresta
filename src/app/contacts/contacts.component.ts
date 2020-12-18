import { Component, OnInit } from '@angular/core';
import { TimelineLite } from 'gsap';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.contactsTransition();
  }

  contactsTransition() {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

    tl.to('.text, .subtitle', 0, {display: "inline-block"})
    tl.to('.text', .5, {y: "0%", stagger: .1})
    tl.to('.subtitle', .5, {opacity: 1, stagger: .1})
    tl.fromTo('.cto', .5, {opacity: 0}, {opacity: 1})
  }
}
