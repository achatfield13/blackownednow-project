import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authUser: AngularFireAuth) { }

  anonUser(){
    return this.authUser.signInAnonymously()
  }
}
