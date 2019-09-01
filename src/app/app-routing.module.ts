import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfessorEditorComponent} from './professor-editor/professor-editor.component';
import {ParticipanteEditorComponent} from './participante-editor/participante-editor.component';
import {MiniCusoEditorComponent} from './mini-cuso-editor/mini-cuso-editor.component';
import {MiniCusrsoListComponent} from './mini-cusrso-list/mini-cusrso-list.component';

const routes: Routes = [
  { path: 'professor', component: ProfessorEditorComponent },
  { path: 'participante', component: ParticipanteEditorComponent },
  { path: 'mini-curso', component: MiniCusoEditorComponent },
  { path: 'mini-curso-details', component: MiniCusrsoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
