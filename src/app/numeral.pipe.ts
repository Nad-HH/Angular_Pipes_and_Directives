import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeral'
})
export class NumeralPipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {
    if(args != null){
      if(args == 'ingles'){
        switch (value){
          case 1: return 'one'
          case 2: return 'two'
          case 3: return 'three'
          case 4: return 'four'
          case 5: return 'five'
        }
      } else if(args == 'italiano'){
        switch (value){
          case 1: return 'one'
          case 2: return 'due'
          case 3: return 'tre'
          case 4: return 'quattro'
          case 5: return 'cinque'
        }
    }

    switch (value){
      case 1: return 'uno'
      case 2: return 'dos'
      case 3: return 'tres'
      case 4: return 'cuatro'
      case 5: return 'cinco'
    }
  }
    return null;
  
}
}