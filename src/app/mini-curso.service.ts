import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiniCursoService {

  private apiMinicurso = 'api/mini-cursos/';

  constructor(private http: HttpClient) { }

  cadastrarMiniCurso(miniCurso: any): Observable<any> {
    return this.http.post(`http://localhost:8080/${this.apiMinicurso}`, miniCurso);
  }
}
