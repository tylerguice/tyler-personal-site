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
      role: 'Application Manager'
    },
    {
      message: 'Tyler is loyal, dependable, is always seeking to improve, adheres to best practices, ' +
               'and has an excellent eye for detail. I\'ve worked with him for over four years ' +
               'and he has proven to be a valuable asset on many major projects.',
      author: 'Neil Purcell',
      role: 'Lead Application Developer'
    },
    {
      message: 'Tyler is a dependable developer who is quick on his feet when it comes to researching and resolving issues. ' +
               'He is my go-to developer to ask questions and is always willing to take the time to explain what I ' +
               'don\'t fully understand. ' +
               'His code is reliable and I can always rely on his thorough unit testing.',
      author: 'Anne-Marie Williams',
      role: 'Lead Business Analyst'
    }
  ];

  slides = [
    {'image': 'src/assets/images/blue-background-gradiant.jpg'},
    {'image': 'src/assets/images/blue-background-gradiant.jpg'},
    {'image': 'src/assets/images/blue-background-gradiant.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
