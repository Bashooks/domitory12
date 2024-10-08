import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home1/home1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { SearchComponent } from './search/search.component';
import { DormitoryComponent } from './dormitory/dormitory.component';
import { AdddormitoryforuserComponent } from './adddormitoryforuser/adddormitoryforuser.component';
import { SubmitdocumentsComponent } from './submitdocuments/submitdocuments.component';
import { DocumenttrackingComponent } from './documenttracking/documenttracking.component';
import { SettingComponent } from './setting/setting.component';
import { DetaildormitoryComponent } from './detaildormitory/detaildormitory.component';
import { AdddormitoryforuserService } from './adddormitoryforuser/adddormitoryforuser.service';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    RegisterDialogComponent,
    LoginDialogComponent,
    SearchComponent,
    DormitoryComponent,
    AdddormitoryforuserComponent,
    SubmitdocumentsComponent,
    DocumenttrackingComponent,
    SettingComponent,
    DetaildormitoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdddormitoryforuserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
