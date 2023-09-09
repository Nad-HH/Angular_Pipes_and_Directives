import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit{

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

  listEstudiante(){
    this.router.navigate(['/estudiante'])
  }
}
