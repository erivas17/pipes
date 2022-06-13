import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {



  transform(value: string, nombre: string, metodo: string): string {
    console.log(value);
    console.log(nombre);
    console.log(metodo);

    return value.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
  }


}
