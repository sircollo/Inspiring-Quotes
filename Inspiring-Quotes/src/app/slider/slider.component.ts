import { Component, OnInit } from '@angular/core';
import { Slider } from '../slider';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slider: Slider[] = []
  images = [
    {title: 'Wangari Maathai',src: "assets/mathai.jpeg"},
    {title: 'Bill Gates',src: "assets/bill.jpeg"},
    {title: 'Steve Jobs',src: "assets/steve.jpeg"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
