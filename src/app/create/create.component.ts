import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{

  estudiante: Estudiante= new Estudiante();
  
  constructor (private service:EstudianteService, private router: Router){}

  ngOnInit(): void {
      
  }

  createEstudiante(){
    this.service.createEstudiante(this.estudiante)  
    .subscribe(res =>{  
      console.log(res);           
      this.router.navigate(['/estudiante']);
    })
  }

  onSubmit(){
    if(this.estudiante.name == null){
      alert("debe usar un nombre");
      return;
    }
    console.log(this.estudiante);
    this.createEstudiante();
  }


}
