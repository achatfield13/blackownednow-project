import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ThelistComponent } from './thelist/thelist.component';
import { JoinusComponent, BlackOwnedNowDialogComponent } from './joinus/joinus.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutusComponent,
    ContactusComponent,
    ThelistComponent,
    JoinusComponent,
    BlackOwnedNowDialogComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
