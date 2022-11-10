import { Disciplina } from './../model/disciplina';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoDeDadosService {

  url: String = "https://636c557aad62451f9fc7cb12.mockapi.io/disciplinas"

  constructor(private http: HttpClient) { }

  getFrequencia() {
    return this.http.get<Disciplina[]>(`${this.url}`);
  }
}
