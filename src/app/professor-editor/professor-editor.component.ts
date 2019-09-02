import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ProfessorService} from "../professor.service";

@Component({
  selector: 'app-professor-editor',
  templateUrl: './professor-editor.component.html',
  styleUrls: ['./professor-editor.component.css']
})
export class ProfessorEditorComponent implements OnInit {

    professorForm = new FormGroup({
      nome: new FormControl(),
      matricula: new FormControl(),
      email: new FormControl(),
      senha: new FormControl(),
      telefones: new FormControl()
    });

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
  }

  cadastrarProfessor(): void {
    this.professorService.cadastrarProfessor(this.professorForm.value).subscribe((item : any) => alert(),
      error => console.log(error));
  }

}
