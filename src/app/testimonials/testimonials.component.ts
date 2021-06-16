import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  public testimonials = [
    {
      message: 'It’s not often you encounter someone with the talent, heart and skillset of Tyler Guice. ' +
               'He has an aptitude for learning complex skills quickly, ' +
               'while providing some of the best user interface designs on the market.',
      author: 'David Wilt',
      role: 'Application Manager, 4.5 years'
    },
    {
      message: 'Tyler is loyal, dependable, is always seeking to improve, adheres to best practices, ' +
               'and has an excellent eye for detail. For over four years that I\'ve worked ' +
               'with him, he has proven to be a valuable asset on many major projects.',
      author: 'Neil Purcell',
      role: 'Lead Application Developer, 4.5 years'
    },
    {
      message: 'Placeholder text....',
      author: 'Tyler Biggert',
      role: 'Junior Developer, 1.5 years'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
