import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenha'
})
export class ContrasenhaPipe implements PipeTransform {

  transform(value: string, activo: boolean): string {
    let valor: string;

    if(activo){
      valor = '*********';
    }
    else{
      valor = value;
    }

    return valor;
  }

}
