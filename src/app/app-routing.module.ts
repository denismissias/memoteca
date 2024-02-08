import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamentos',
    pathMatch: 'full'
  },
  {
    path: 'criar-pensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listar-pensamentos',
    component: ListarPensamentoComponent
  },
  {
    path: 'excluir-pensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'editar-pensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
