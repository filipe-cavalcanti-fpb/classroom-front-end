import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ReactiveFormsModule} from '@angular/forms';
import { ProfessorEditorComponent } from './professor-editor/professor-editor.component';
import { ParticipanteEditorComponent } from './participante-editor/participante-editor.component';
import { MiniCusoEditorComponent } from './mini-cuso-editor/mini-cuso-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorEditorComponent,
    ParticipanteEditorComponent,
    MiniCusoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
