import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MiniCursoService} from '../mini-curso.service';
import {ProfessorService} from "../professor.service";
import {ProfessorConsultaModel} from "../models/professor-consulta.model";

@Component({
  selector: 'app-mini-cuso-editor',
  templateUrl: './mini-cuso-editor.component.html',
  styleUrls: ['./mini-cuso-editor.component.css']
})
export class MiniCusoEditorComponent implements OnInit {

  miniCursoForm = new FormGroup({
    nome: new FormControl(),
    dataRealizacao: new FormControl(),
    duracaoPrevista: new FormControl(),
    totalVagas: new FormControl(),
    idProfessor: new FormControl(),
  });

  professores: Array<ProfessorConsultaModel>;

  constructor(private miniCursoService: MiniCursoService, private professorService: ProfessorService) {
  }

  ngOnInit() {
    this.consultarProfessores();
  }

  cadastrarMiniCurso() {
    this.miniCursoService.cadastrarMiniCurso(this.miniCursoForm.value).subscribe((item: any) => {
      console.log(item);
    }, error => console.log(error));
  }

  consultarProfessores(): void {
    this.professorService.consultarProfessores().subscribe(
      (item: Array<ProfessorConsultaModel>) => this.professores = item,
    error => console.log("erro "));
  }

}
