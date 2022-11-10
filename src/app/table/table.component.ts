import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';

import { Aluno } from '../model/aluno';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  alunosLista: Aluno[] = [];
  dataSource : any;
  table = null;

  constructor(private alunoService : AlunoService) {
    this.alunoService.list().subscribe((response) => {
      this.alunosLista = response;
    });
  }

  ngOnInit(): void {
  }

  downloadAsCSV() {
    const table = document.querySelector("#table-alunos")!;
    console.log(table);
    let blob = new Blob(['\ufeff',table.outerHTML], {type: "application/vnd.ms-excel"})
    FileSaver.saveAs(blob, "teste.xls")
  }

  displayedColumns: string[] = ['matricula', 'avatar', 'nome', 'curso'];
}
