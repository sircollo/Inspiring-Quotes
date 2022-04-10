import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormGroup,Validators
 } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
    
})

export class FooterComponent implements OnInit {
  // email:any = ''
  subscriptionForm = new FormGroup({
    email: new FormControl(' ', [Validators.required, Validators.email])
  })

  get email(){
    return this.subscriptionForm.get('email')
  }
   subscribe(){
    // if(this.email.valid){
      alert('You will receive Quotes Updates')
  //  }
    
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
