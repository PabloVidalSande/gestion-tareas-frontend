import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  swal  from 'sweetalert2';


@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  // styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 5;

  mostrarTodas = true;
  mostrarNoRealizadas = false;
  mostrarRealizadas = false;

filtrarRealizadas() {
  this.mostrarTodas = false;
  this.mostrarRealizadas = true;
  this.mostrarNoRealizadas = false;
}

filtrarNoRealizadas() {
  this.mostrarTodas = false;
  this.mostrarRealizadas = false;
  this.mostrarNoRealizadas = true;
}

mostrarTodasTareas() {
  this.mostrarTodas = true;
  this.mostrarRealizadas = false;
  this.mostrarNoRealizadas = false;
}

get tareasFiltradas() {
  if (this.mostrarTodas) {
    return this.tareas.reverse();
  } else {
    if (!this.mostrarRealizadas){
      return this.tareas.filter(tarea => tarea.realizada === false).reverse();
    } else {
      return this.tareas.filter(tarea => tarea.realizada === true).reverse();
    }

  }
}

  tareas: Tarea[];

  constructor(private tareaServicio:TareaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  actualizarTarea(id:number){
    this.router.navigate(['actualizar-tarea',id]);
  }

  private obtenerTareas(){
    this.tareaServicio.obtenerListaDeTareas().subscribe(dato => {
      this.tareas = dato;
    });
  }

  eliminarTarea(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al tarea",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result: { value: any; }) => {
      if(result.value){
        this.tareaServicio.eliminarTarea(id).subscribe(dato => {
          console.log(dato);
          this.obtenerTareas();
          swal(
            'Tarea eliminado',
            'El tarea ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelTarea(id:number){
    this.router.navigate(['tarea-detalles',id]);
  }
}
