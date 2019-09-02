import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MiniCursoModel} from "./models/mini-curso.model";

@Injectable({
  providedIn: 'root'
})
export class MiniCursoService {

  private apiMinicurso = 'api/mini-cursos/';

  private baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  cadastrarMiniCurso(miniCurso: any): Observable<any> {
    return this.http.post(`${this.baseURL}${this.apiMinicurso}`, miniCurso);
  }

  consultarMiniCursos(): Observable<any> {
    return this.http.get(`${this.baseURL}${this.apiMinicurso}`);
  }

  inscreverParticipanteMiniCurso(idMiniCurso, participanteInscricao): Observable<any> {
    return this.http.post(`${this.baseURL}${this.apiMinicurso}${idMiniCurso}/participantes`, participanteInscricao);
  }
}
