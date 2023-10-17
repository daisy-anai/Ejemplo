import { Component } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formUser = new FormGroup({
    'nombre': new FormControl(''),
    'edad': new FormControl('')
  })
  constructor(){}
  enviar(){
    console.log(this.formUser.value);
  }
}
