import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ParticipanteCadastroModel} from "./models/participante-cadastro.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  private apiParticipante = 'api/participantes/';

  private baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  cadastararParticipante(participanteCadastro: ParticipanteCadastroModel): Observable<any> {
    return this.http.post(`${this.baseURL}${this.apiParticipante}`, participanteCadastro);
  }
}
