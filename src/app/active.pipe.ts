import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {
    //validaciones o condicionales
    if (value === true || value === "true"|| value === "1"){
      return 'active'
    } else{
      return 'inactive'
    }
    return null;
  }


}
