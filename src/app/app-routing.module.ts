import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ThelistComponent } from './thelist/thelist.component';
import { JoinusComponent } from './joinus/joinus.component';


const routes: Routes = [
  {
    path: '', component:MainComponent
  },
  {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path: 'contactus', component:ContactusComponent
  },
  {
    path:'thelist', component:ThelistComponent
  },
  {
    path: 'joinus', component:JoinusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
