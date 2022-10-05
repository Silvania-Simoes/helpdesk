import { Component, Input, OnInit } from '@angular/core';

export interface Contact{
  id?: string; 
  name?: string;
  email?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {


  @Input() dados: Contact = {};
  

  constructor() { }

  ngOnInit(): void {
   
  }

}
