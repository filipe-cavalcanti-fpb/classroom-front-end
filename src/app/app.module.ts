import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessorEditorComponent } from './professor-editor/professor-editor.component';
import { ParticipanteEditorComponent } from './participante-editor/participante-editor.component';
import { MiniCusoEditorComponent } from './mini-cuso-editor/mini-cuso-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { MiniCusrsoListComponent } from './mini-cusrso-list/mini-cusrso-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorEditorComponent,
    ParticipanteEditorComponent,
    MiniCusoEditorComponent,
    MiniCusrsoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
