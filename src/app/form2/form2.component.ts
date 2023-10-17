import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  formUser = new FormGroup({
    'nombre': new FormControl(''),
    'ap_p': new FormControl(''),
    'ap_m': new FormControl('')
  })
  enviar(){
    console.log(this.formUser.value);
  }
}
