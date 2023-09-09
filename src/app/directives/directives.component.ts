import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})

export class DirectivesComponent {

  size: number =10;

  footer: any ={
    "position":"flex",
    "botton":0,
    "width":"100%",
    "height":"100px",
    "background-color":"#007bff",
    "text-align":"center",
    "color":"white",
    "font-size.px":this.size
  }

  plussizefont() {
    this.size++;
    console.log(this.size);
    if(this.size <20)
      this.footer["font-size"] = this.size + "px"; // Asigna el valor con "px"
  }
  
  lessizefont() {
    this.size--;
    console.log(this.size);
    if(this.size >10)
    this.footer["font-size"] = this.size + "px"; // Asigna el valor con "px"
  }
}
