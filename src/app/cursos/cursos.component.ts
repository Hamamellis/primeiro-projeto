import { Component, OnInit } from '@angular/core';

import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[]; 

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'https://github.com/Hamamellis';

    this.cursos = this.cursosService.getCursos();

    /*
    for (let i = 0; i < this.cursos.length; i++) 
        {
          let curpso = this.cursos[i];      
        }
    
        //var servico = new CursosService();     
    */
  }

  ngOnInit(): void {
  }

}
