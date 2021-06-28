import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isMobile: boolean;

  public ngOnInit(): void {
    this.isMobile = window.innerWidth < 1024 ? true : false;
  }

  public scrollToElement(id: string): void {
    const element = document.getElementById(id);
    const yOffset = -64;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

}
