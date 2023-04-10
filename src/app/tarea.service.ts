import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  //Esta URL obtiene el listado de todos los tareas en el backend
  private baseURL = "http://localhost:8080/api/v1/tareas";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos sirve para obtener los tareas
  obtenerListaDeTareas():Observable<Tarea[]>{
    return this.httpClient.get<Tarea[]>(`${this.baseURL}`);
  }

  //este metodo nos sirve para registrar una tarea
  registrarTarea(tarea:Tarea) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,tarea);
  }

  //este metodo sirve para actualizar la tarea
  actualizarTarea(id:number,tarea:Tarea) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,tarea);
  }

  //este metodo sirve para obtener o buscar una tarea
  obtenerTareaPorId(id:number):Observable<Tarea>{
    return this.httpClient.get<Tarea>(`${this.baseURL}/${id}`);
  }

  eliminarTarea(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
