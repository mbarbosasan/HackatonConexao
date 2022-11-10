export class Aluno {
  matricula : Number;
  nome : String;
  avatar: String;
  disciplina : String;
  curso : String;

  constructor(matricula: number, nome: string, avatar: string, disciplina: string, curso: string) {
    this.matricula = matricula;
    this.nome = nome;
    this.avatar = avatar;
    this.disciplina = disciplina;
    this.curso = curso;
  }

}
