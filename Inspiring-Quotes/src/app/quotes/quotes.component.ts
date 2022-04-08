import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Collins', 'Wangari Maathai','"Human rights are not things that are put on the table for people to enjoy. These are things you fight for and then you protect."'),
    new Quotes('Sirwani', 'Steve Jobs','"Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected."')
    
  ];
  // addNewQuote(Quotes){
    // let goalLength = this.quotes.length;
    // Quotes.id = goalLength+1;
    // this.quotes.completeDate = new Date(goal.completeDate)
    // this.quotes.push(this.Quotes))
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
