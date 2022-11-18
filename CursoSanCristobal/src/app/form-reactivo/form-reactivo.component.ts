import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {
  personaForm = this.fb.group(
    {
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zipcode: ['']
      })
    });


  /* personaForm = new FormGroup(
    {
      user: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zipcode: new FormControl('')
      })
    }
  ); */
  oculto = 'password'
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  reset(): void {
    // this.personaForm.setValue();
    /* this.personaForm.patchValue({
      address: {
        city: 'Cordoba'
      }
    }) */
    this.personaForm.reset();
  }

  onSubmit(): void {
    console.log('llegaron los datos: ', this.personaForm.value)
  }
  hidePassword(): void {
    if (this.oculto === 'password') {
      this.oculto = 'text';
    } else {
      this.oculto = 'password';
    }
  }
}