import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: 'O que não provoca minha morte faz com que eu fique mais forte.',
    autoria: 'Friedrich Nietzsche',
    modelo: 'modelo1'
  };

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  criarPensamento(): void {
    this.service.criar(this.pensamento).subscribe(pensamento => {
      this.router.navigate(['/listar-pensamentos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listar-pensamentos']);
  }

}
