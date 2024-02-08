import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: 'O que não provoca minha morte faz com que eu fique mais forte.',
    autoria: 'Friedrich Nietzsche',
    modelo: 'modelo1'
  };
  constructor(
    private service: PensamentoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(id)).subscribe(pensamento => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento(): void {
    this.service.excluir(Number(this.pensamento.id)).subscribe(() => {
      this.router.navigate(['/listar-pensamentos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listar-pensamentos']);
  }

}
