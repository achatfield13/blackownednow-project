import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

@Component({
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

  EmailForm = new FormGroup({
    email: new FormControl('', Validators.email),
  })

  constructor(private afs: AngularFirestore, private fns: AngularFireFunctions) { }

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;


  getInvolved() {
    console.log(this.contactUsForm.value)
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
    const callable = this.fns.httpsCallable('createContactData')
    callable(this.contactUsForm.value).subscribe(data => {
      console.log('data has been added')
    })
  
  }
  sendEmail(){
    console.log(this.EmailForm.value)
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
    const callable = this.fns.httpsCallable('createEmailList');
    callable(this.EmailForm.value).subscribe(data => {
      console.log("data has been stored")
    })
  }

  ngOnInit(): void {
  }

}
