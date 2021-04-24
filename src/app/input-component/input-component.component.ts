import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  username: string="";
  disabled: boolean = false;

  constructor() {
   }

  ngOnInit(): void {
  }
  
   isButtonDisabled(){
     console.log("in isButtonDisabled()...");
     console.log("this.username: " + this.username);
     console.log("this.username.length: " + this.username.length);

    if(this.username==='' || this.username.length===0){
     return this.disabled = true;
    
    }

    return this.disabled = false;
  }

}


