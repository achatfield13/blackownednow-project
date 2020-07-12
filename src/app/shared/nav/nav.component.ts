import { Component, OnInit } from '@angular/core';
import {BreakpointObserver,Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map,shareReplay} from 'rxjs/operators';
import { Router } from '@angular/router';
import {faInstagram,faFacebook,faTwitter,faLinkedin, faStripe} from '@fortawesome/free-brands-svg-icons';
import { NgTemplateOutlet } from '@angular/common';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),shareReplay()
    )
  constructor( private BreakpointObserver: BreakpointObserver, public router: Router) { }
    faInstagram = faInstagram;
    faFacebook = faFacebook;
    faTwitter = faTwitter;
    faLinkedin = faLinkedin;
    faStripe = faStripe;
  

  ngOnInit(): void {
    if(this.router.isActive('/', true)){
      console.log('True')
    }
  }

}
