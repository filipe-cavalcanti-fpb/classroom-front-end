import { Component, OnInit } from '@angular/core';
import {MiniCursoModel} from "../models/mini-curso.model";
import {MiniCursoService} from "../mini-curso.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-mini-cusrso-list',
  templateUrl: './mini-cusrso-list.component.html',
  styleUrls: ['./mini-cusrso-list.component.css']
})
export class MiniCusrsoListComponent implements OnInit {

  private miniCursos: Array<MiniCursoModel>;

  constructor(private miniCursoService: MiniCursoService) { }

  ngOnInit() {
    this.consultarMiniCursos();
    setTimeout(() => {this.consultarMiniCursos()}, 1000)
  }

  public inscreverParticipanteMiniCurso(idMiniCurso): void {
    console.log({idMiniCurso: idMiniCurso, idParticipante: 1});
    this.miniCursoService.inscreverParticipanteMiniCurso(idMiniCurso,
      {idParticipante: 20}).subscribe((item: any) => alert(item),
        error => console.log('erro'));
  }

  public consultarMiniCursos(): void {
    this.miniCursoService.consultarMiniCursos().subscribe(
      (item: Array<MiniCursoModel>) => this.miniCursos = item,
      error => console.log('erro'));
  }

}
