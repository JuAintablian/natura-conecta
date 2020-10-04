import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aguarde-senha',
  templateUrl: './aguarde-senha.component.html',
  styleUrls: ['./aguarde-senha.component.scss']
})
export class AguardeSenhaComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
    this.redirect();
  }

  redirect(){
    setTimeout(() => this.route.navigate(['compra-concluida']), 4000);
  }

}
