import { TareaService } from './../tarea.service';
import { Tarea } from './../tarea';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-registrar-tarea',
  templateUrl: './registrar-tarea.component.html',
  // styleUrls: ['./registrar-tarea.component.css']
})
export class RegistrarTareaComponent implements OnInit {

  tarea : Tarea = new Tarea();
  constructor(private tareaServicio:TareaService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarTarea(){
    this.tareaServicio.registrarTarea(this.tarea).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeTareas();
    },error => console.log(error));
  }

  irALaListaDeTareas(){
    this.router.navigate(['/tareas']);
    swal('Tarea registrado',`La tarea ${this.tarea.nombre} ha sido registrada con exito`,`success`);
  }

  onSubmit(){
    this.guardarTarea();
  }
}
