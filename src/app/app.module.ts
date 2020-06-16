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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { ListSearchComponent } from './list-search/list-search.component';
import { NgAisModule } from 'angular-instantsearch';
import { MenuSelect } from './list-search/busines_city_menu-select.component';
import { CategoryMenuSelect } from './list-search/category_menu-select.component';
import { RemoveTrailingCharacterPipe } from './custompipes/remove-whitespace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutusComponent,
    ContactusComponent,
    ThelistComponent,
    JoinusComponent,
    BlackOwnedNowDialogComponent,
    ListSearchComponent,
    MenuSelect,
    CategoryMenuSelect,
    RemoveTrailingCharacterPipe
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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgAisModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
