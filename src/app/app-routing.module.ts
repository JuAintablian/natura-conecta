import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AguardeSenhaComponent } from './aguarde-senha/aguarde-senha.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CompraConcluidaComponent } from './compra-concluida/compra-concluida.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';


const routes: Routes = [
  {
    path: '',
    component: CarrinhoComponent
  },
  {
    path: 'forma-pagamento',
    component: FormaPagamentoComponent
  },
  {
    path: 'aguarde-senha',
    component: AguardeSenhaComponent
  },
  {
    path: 'compra-concluida',
    component: CompraConcluidaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
