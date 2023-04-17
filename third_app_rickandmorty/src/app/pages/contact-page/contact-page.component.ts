import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  contactForm: FormGroup;
  isSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      age: ["", [Validators.required, Validators.min(16)]],
      description: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    })
  }

  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe(changes => {
      console.log(changes);
    })
      
    this.contactForm.controls["name"].valueChanges.subscribe(changes => {
      console.log(changes);
    })
      
    // this.contactForm.statusChanges.subscribe(changes => {
    //   console.log(changes)
    // })
  }

  submit() {
    console.log("NO ENVIADO");
    console.log(this.contactForm);
    
    this.isSubmit = true
    if(this.contactForm.status === "VALID") {
      console.log("ENVIADO OK");
      
      console.log(this.contactForm.value);
      console.log(this.contactForm);
    }
  }

}
