import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Aluno } from '../model/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url : String = "https://636c557aad62451f9fc7cb12.mockapi.io/";


  constructor(
    private http: HttpClient,
    ) { }

  list() {
    return this.http.get<Aluno[]>(`${this.url}alunos`)
  }

  getById(id: number) {
      return this.http.get<Aluno>(`${this.url}alunos/${id}`)
  }
}
