import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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
    vagasOfertadas: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
