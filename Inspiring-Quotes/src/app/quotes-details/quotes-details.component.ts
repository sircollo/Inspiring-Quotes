import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() 
  quotes:Quotes = new Quotes;
  @Output() isDelete = new EventEmitter<boolean>();

    deleteQuote(strikeout:boolean){
      this.isDelete.emit(strikeout);
    }
 
  constructor() { }

  ngOnInit(): void {
  }

}
