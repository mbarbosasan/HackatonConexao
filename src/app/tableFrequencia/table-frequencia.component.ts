import { Aluno } from './../model/aluno';
import { Disciplina } from './../model/disciplina';
import { Observable } from 'rxjs';
import { BancoDeDadosService } from './../services/banco-de-dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-frequencia',
  templateUrl: './table-frequencia.component.html',
  styleUrls: ['./table-frequencia.component.css']
})
export class TableFrequenciaComponent implements OnInit {

  listaAlunosFrequencia: Disciplina[] = [];

  displayedColumns : String[] = ['Matricula', 'Nome'];

  constructor(private service : BancoDeDadosService) {
    this.service.getFrequencia().subscribe((response) => {
      this.listaAlunosFrequencia = response;
    });
  }

  ngOnInit(): void {
    this.createArrayOfDates(new Date(), new Date("11/30/2022"))
  }

  createArrayOfDates(start : Date, end : Date) {
    while (start < end) {
      if (!(new Date(start).getDay() > 5)) {
        this.displayedColumns.push(new Date(start).toLocaleDateString().toString());
      }
      start.setDate(start.getDate() + 1)
    }
  }
}
