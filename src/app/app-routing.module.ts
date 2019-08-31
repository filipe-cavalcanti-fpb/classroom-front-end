import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfessorEditorComponent} from './professor-editor/professor-editor.component';
import {ParticipanteEditorComponent} from './participante-editor/participante-editor.component';
import {MiniCusoEditorComponent} from './mini-cuso-editor/mini-cuso-editor.component';

const routes: Routes = [
  { path: 'professor', component: ProfessorEditorComponent },
  { path: 'participante', component: ParticipanteEditorComponent },
  { path: 'mini-curso', component: MiniCusoEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
