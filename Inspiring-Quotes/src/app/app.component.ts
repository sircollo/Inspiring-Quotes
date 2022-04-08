import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'Inspiring-Quotes';
  images = [
    {title: 'Wangari Maathai',src: "assets/mathai.jpeg"},
    {title: 'Bill Gates',src: "assets/bill.jpeg"},
    {title: 'Steve Jobs',src: "assets/steve.jpeg"}
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
