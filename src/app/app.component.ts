import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helpdesk';
  dados: any;

  onMudouContatos(evento: any) {
    this.dados = evento;
  }
}