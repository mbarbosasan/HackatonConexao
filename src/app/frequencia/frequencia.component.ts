import { Disciplina } from './../model/disciplina';
import { AlunoService } from './../services/aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.component.html',
  styleUrls: ['./frequencia.component.css']
})
export class FrequenciaComponent implements OnInit {

  aluno: any = {
    matricula: null,
    nome: null,
    avatar: null,
    curso: null,
    disciplina: null,
  }

  constructor(private service: AlunoService) { }

  ngOnInit(): void {

  }

  getAlunoById(id: number) {
    this.service.getById(id).subscribe((response) => {
      this.aluno.matricula = response.matricula;
      this.aluno.nome = response.nome;
      this.aluno.avatar = response.avatar;
      this.aluno.curso = response.curso;
      this.aluno.disciplina = response.disciplina
    })
  }

}
