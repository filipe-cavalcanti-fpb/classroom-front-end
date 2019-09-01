import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ParticipanteService} from "../participante.service";

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

  constructor(private participanteService: ParticipanteService) {
  }

  ngOnInit() {
  }

  cadasatrarParticipante(): void {
    this.participanteService.cadastararParticipante(this.participanteForm.value).subscribe(
      (item: any) => alert(item), error => console.log(error));
  }

}
