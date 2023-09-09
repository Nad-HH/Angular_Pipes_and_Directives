import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  estudiante: Estudiante[]=[];

  constructor (private service:EstudianteService, private router: Router){}

  ngOnInit(): void {
      this.getEstudiantes();  // recuperamos estudiantes
  }

  getEstudiantes(){
    this.service.getListEstudiante()  //usamos el servicio
    .subscribe(res =>{              // dentro del subscribe tenemos la respuesta
      this.estudiante = res;
    })
  }

 

  createEstudiante(){
    this.router.navigate(['create'])
  }

  getEstudiante(id:number){
    this.router.navigate(['show',id])
  }

  updateEstudiante(id:number){
    this.router.navigate(['update',id])
  }
  deleteEstudiante(id:number){
    this.service.deleteEstudiante(id)  
    .subscribe(res =>{              
      console.log(res);
      this.getEstudiantes();
    })
  }

}
