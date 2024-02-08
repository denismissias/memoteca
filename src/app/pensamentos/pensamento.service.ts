import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get<Pensamento[]>(this.API);
  }

  criar(pensamento: Pensamento) {
    return this.httpClient.post<Pensamento>(this.API, pensamento);
  }

  editar(pensamento: Pensamento) {
    return this.httpClient.put<Pensamento>(`${this.API}/${pensamento.id}`, pensamento);
  }

  excluir(id: number) {
    return this.httpClient.delete<Pensamento>(`${this.API}/${id}`);
  }

  buscarPorId(id: number) {
    return this.httpClient.get<Pensamento>(`${this.API}/${id}`);
  }
}
