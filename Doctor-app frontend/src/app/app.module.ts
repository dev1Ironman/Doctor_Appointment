import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { AddSlotComponent } from './add-slot/add-slot.component';
// import {MatIconModule} from '@angular/material/icon';
// import { MatMomentDateModule } from "@angular/material-moment-adapter/core"; 
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentComponent,
    AddSlotComponent,
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    CdkTableModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
    
  ],
  entryComponents: [
    AddSlotComponent
  ],
    
    providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
