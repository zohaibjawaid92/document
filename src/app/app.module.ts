import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DocComponent } from './pages/doc/doc.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ComponentComponent } from './pages/component/component.component';
import { HeaderComponent } from './layout/header/header.component';
import { SinginComponent } from './pages/singin/singin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentsComponent } from './layout/toolbar/documents/documents.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    DocComponent,
    FooterComponent,
    ComponentComponent,
    HeaderComponent,
    SinginComponent,
    SignupComponent,
    ProfileComponent,
    SubscriptionsComponent,
    DocumentsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,MatMenuModule,
    MatInputModule,
    MatFormFieldModule,MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
