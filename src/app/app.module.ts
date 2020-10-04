import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { AguardeSenhaComponent } from './aguarde-senha/aguarde-senha.component';
import { CompraConcluidaComponent } from './compra-concluida/compra-concluida.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    FormaPagamentoComponent,
    AguardeSenhaComponent,
    CompraConcluidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
