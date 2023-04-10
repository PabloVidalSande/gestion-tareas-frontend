import { TareaService } from './../tarea.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarea } from '../tarea';
import  swal  from 'sweetalert2';
@Component({
  selector: 'app-tarea-detalles',
  templateUrl: './tarea-detalles.component.html',
  // styleUrls: ['./tarea-detalles.component.css']
})
export class TareaDetallesComponent implements OnInit {

  id: number;
  tarea: Tarea;
  constructor(private route:ActivatedRoute,private tareaServicio:TareaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tarea = new Tarea();
    this.tareaServicio.obtenerTareaPorId(this.id).subscribe(dato => {
      this.tarea = dato;
      swal(`Detalles de la tarea ${this.tarea.nombre}`);
    });
  }

}
