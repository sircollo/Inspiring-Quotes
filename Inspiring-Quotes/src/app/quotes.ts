export class Quotes {
  static id: number;
  showQuoteSaid:boolean

  constructor(    
    public id?:number,
    public name?:string, 
    public author?:string, 
    public quoteSaid?:string,
    public datePosted?:Date ){

      this.showQuoteSaid = false;

  }
}
