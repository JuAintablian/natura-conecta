import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  items = [
    { id: 1, nome: 'Batom matte Vermelho', descricao: 'Batom do tipo matte na cor 001', valor: '20,00', quantidade: 1 },
    { id: 2, nome: 'Base Beije', descricao: 'Base do tipo matte na cor 30c', valor: '30,00', quantidade: 1 },
    { id: 3, nome: 'Pincel maquiagem', descricao: 'Pincel para aplicação de base número 12', valor: '20,00', quantidade: 2 }
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  increase(id){

  }

  decrease(id){

  }

  delete(id){

  }

  redirect() {
    this.route.navigate(['forma-pagamento']);
  }

}
