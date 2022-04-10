import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes(1,'Collins', 'Wangari Maathai','"Human rights are not things that are put on the table for people to enjoy. These are things you fight for and then you protect."',new Date(2022,4,8),0,0),
    new Quotes(2,'Sirwani', 'Steve Jobs','"Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected."', new Date(2022,3,21),0,0)
    
  ]
  buttonText:any = 'View';
  viewDetails(index:any){
    this.quotes[index].showQuoteSaid = !this.quotes[index].showQuoteSaid;
    this.buttonText = !this.buttonText
  }
  deleteQuote(isDelete:any, index:any){
    if(isDelete){
      let toDelete = confirm(`Delete quote from ${this.quotes[index].name}?`)
    
    if(toDelete){
      this.quotes.splice(index,1)
    }
  }
  }
  
  addNewQuote(quote:any){
    let quotesLength = this.quotes.length;
    quote.id = quotesLength+1;
    // this.quotes.completeDate = new Date(goal.completeDate)
    this.quotes.push(quote)
  }
  upVoteValue: number = 0;
  downVoteValue: number = 0;
  upVote(index: number){
    this.upVoteValue++
     
  }
  downVote(index: number){
    this.downVoteValue--
  }
  constructor() { }

  ngOnInit(): void {
  }

}
