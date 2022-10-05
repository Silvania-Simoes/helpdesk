import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Contact{
  id?: string; 
  name?: string;
  email?: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() textButton: string = "";
  @Output() mudouContatos = new EventEmitter();
  
  contact : Contact = {
    name:'',
    email:'' 
  }

  enviar() {
    this.mudouContatos.emit({name: this.contact.name, email: this.contact.email})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
