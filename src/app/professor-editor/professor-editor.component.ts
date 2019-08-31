import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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
      senha: new FormControl()
    });

  constructor() { }

  ngOnInit() {
  }

}
