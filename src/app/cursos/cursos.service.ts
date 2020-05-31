import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return ['AngularJS','NodeJS','SqlServer'];
  }

}
