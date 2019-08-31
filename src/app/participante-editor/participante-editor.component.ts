import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-participante-editor',
  templateUrl: './participante-editor.component.html',
  styleUrls: ['./participante-editor.component.css']
})
export class ParticipanteEditorComponent implements OnInit {

  participanteForm = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    senha: new FormControl(),
    cpf: new FormControl(),
    dataNascimento: new FormControl()
  });

  constructor() {
  }

  ngOnInit() {
  }

}
