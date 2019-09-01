import { Component, OnInit } from '@angular/core';
import {MiniCursoModel} from "../models/mini-curso.model";
import {MiniCursoService} from "../mini-curso.service";

@Component({
  selector: 'app-mini-cusrso-list',
  templateUrl: './mini-cusrso-list.component.html',
  styleUrls: ['./mini-cusrso-list.component.css']
})
export class MiniCusrsoListComponent implements OnInit {

  private miniCursos: Array<MiniCursoModel> = [
    {
      id: 1,
      nome: 'Calculo',
      professor: {
        id: 1,
        nome: 'Filip'
      },
      duracao: 13,
      dataRealizacao : '2019-06-10'
    },
    {
      id: 1,
      nome: 'Calculo',
      professor: {
        id: 1,
        nome: 'Filip'
      },
      duracao: 13,
      dataRealizacao : '2019-06-10'
    },
  ];

  constructor(private miniCursoService: MiniCursoService) { }

  ngOnInit() {
  }

  public inscreverParticipanteMiniCurso(idMiniCurso: number): void {
    this.miniCursoService.inscreverParticipanteMiniCurso(idMiniCurso,
      {idParticipante: 1}).subscribe((item: any) => console.log(item),
        error => console.log('erro'));
  }

}
