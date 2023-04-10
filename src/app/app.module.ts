import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarTareaComponent } from './registrar-tarea/registrar-tarea.component';
import { FormsModule } from '@angular/forms';
import { ActualizarTareaComponent } from './actualizar-tarea/actualizar-tarea.component';
import { TareaDetallesComponent } from './tarea-detalles/tarea-detalles.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    RegistrarTareaComponent,
    ActualizarTareaComponent,
    TareaDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
