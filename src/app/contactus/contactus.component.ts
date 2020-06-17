import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactUsForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl(''),
    hearAboutNotes: new FormControl(''),
    tellaboutyou : new FormControl(''),
    what_programs: new FormControl('')
  })

  constructor() { }

  getInvolved() {
    console.log(this.contactUsForm.value)
    this.contactUsForm.reset()
    this.contactUsForm.value.markAsPristine();
    this.contactUsForm.markAsUntouched();
    this.contactUsForm.updateValueAndValidity();
  }

  ngOnInit(): void {
  }

}
