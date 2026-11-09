import  {Component} from '@angular/core';
import { Estudiante } from './models/estudiante';

@Component ({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  titulo : string = "Sistemas de Gestion Academica";
  estudiante: Estudiante = {
    id:1,
    nombre: 'Teresa Mendez',
    correo: "teresa@ues.edu.sv",
    carrera: "Sistemas"
  };
}