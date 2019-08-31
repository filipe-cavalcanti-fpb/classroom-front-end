import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MiniCursoService} from '../mini-curso.service';

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
    totalVagas: new FormControl()
  });

  constructor(private miniCursoService: MiniCursoService) {
  }

  ngOnInit() {
  }

  cadastrarMiniCurso() {
    this.miniCursoService.cadastrarMiniCurso(this.miniCursoForm.value).subscribe((item: any) => {
      console.log(item);
    }, error => console.log(error));
  }

}
