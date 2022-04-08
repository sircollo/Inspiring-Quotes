import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quotes[]=[
    new Quotes(1, 'Wangari Maathai','Human rights are not things that are put on the table for people to enjoy. These are things you fight for and then you protect.'),
    new Quotes(2, 'Steve Jobs','Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
