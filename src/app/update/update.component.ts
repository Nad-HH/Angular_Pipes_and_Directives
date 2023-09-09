import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  id:number=0;
  estudiante: Estudiante=new Estudiante();

  constructor(private service: EstudianteService,
              private router: Router,
              private route:ActivatedRoute){}
  
  ngOnInit(): void {
      this.id=this.route.snapshot.params["id"];

      this.service.getEstudianteById(this.id)
      .subscribe(res =>{
        this.estudiante=res;
      })

  }

  //actualiza la informacion
  onSubmit(){
    if(this.estudiante.name == null){
      alert("debe usar un nombre");
      return;
    } 
    console.log(this.estudiante);
    this.updateEstudiante();
  }

  updateEstudiante(){
    this.service.updateEstudiante(this.id, this.estudiante)  
    .subscribe(res =>{  
      console.log(res);           
      this.router.navigate(['/estudiante']);
    })
  }


}
