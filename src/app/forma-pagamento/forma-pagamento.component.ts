import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.scss'],
})
export class FormaPagamentoComponent implements OnInit {
  class;

  constructor( private route: Router) {}

  ngOnInit(): void {}

  select(item) {
    switch (item) {
      case 'debito':
        this.class = { debito: true };
        break;
      case 'credito':
        this.class = { credito: true };
        break;
    }
  }

  redirect(){
    this.route.navigate(['aguarde-senha']);
  }
}
