import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private API_URL="http://localhost:3000/estudiante";

  constructor(private http:HttpClient) { }

  getListEstudiante(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${this.API_URL}`);
  }

  createEstudiante(estudiante:Estudiante): Observable<Object>{
    return this.http.post<Estudiante[]>(`${this.API_URL}`,estudiante);
  }

  getEstudianteById(id:Number): Observable<Estudiante>{
    return this.http.get<Estudiante>(`${this.API_URL}/${id}`);
  }

  updateEstudiante(id:number, estudiante: Estudiante): Observable<object>{
    return this.http.put(`${this.API_URL}/${id}`, estudiante);
  }

  deleteEstudiante(id:number): Observable<object>{
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
