import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private apiProfessor = 'api/professores/';

  private baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  cadastrarProfessor(professorCadastro): Observable<any> {
    return this.http.post(`${this.baseURL}${this.apiProfessor}`, professorCadastro);
  }

  consultarProfessores(): Observable<any> {
    return this.http.get(`${this.baseURL}${this.apiProfessor}`);
  }
}
