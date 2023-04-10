import { TareaDetallesComponent } from './tarea-detalles/tarea-detalles.component';
import { ActualizarTareaComponent } from './actualizar-tarea/actualizar-tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarTareaComponent } from './registrar-tarea/registrar-tarea.component';

const routes: Routes = [
  {path : 'tareas',component:ListaTareasComponent},
  {path:'',redirectTo:'tareas',pathMatch:'full'},
  {path : 'registrar-tarea',component : RegistrarTareaComponent},
  {path : 'actualizar-tarea/:id',component : ActualizarTareaComponent},
  {path : 'tarea-detalles/:id',component : TareaDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
