import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { AngularFireFunctions } from '@angular/fire/functions';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private afn: AngularFireFunctions) { }

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  EmailForm = new FormGroup({
    email: new FormControl('', Validators.email),
  })

  sendEmail(){
    console.log(this.EmailForm.value)
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
    const callable = this.afn.httpsCallable('createEmailList');
    callable(this.EmailForm.value).subscribe(data => {
      console.log("data has been stored")
    })
  }

  ngOnInit(): void {
  }

}
