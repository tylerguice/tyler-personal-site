import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public element;

  constructor() { }

  ngOnInit() {
    this.element = document.getElementById('about');
    console.log(this.element);
  }

  public scrollToAbout(): void {
    const yOffset = -64;
    const y = this.element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }


}
