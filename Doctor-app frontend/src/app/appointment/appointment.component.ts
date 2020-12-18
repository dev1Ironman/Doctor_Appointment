import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import {  MatDialog,  } from '@angular/material/dialog';
import { AddSlotComponent} from '../add-slot/add-slot.component'
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
selectedDate: any;
timeslot;

  allData=[];
  filteredData=[]
  dialogRef: any;
  constructor(public appService: AppointmentService, private _matDialog: MatDialog,) { }

  ngOnInit() {

    this.appService.getPatient().subscribe((res: any) => {
      console.log(res)
      this.allData = res; 
    })
  }



  // on changing date picker value
  onSelect(event){
    this.timeslot = {};
    console.log(event);
    this.selectedDate= event;
    this.filteredData = this.allData.filter((element) => {
      debugger 
      var date = new Date(element.date);
      var date1 = new Date(this.selectedDate);
      return date.toString() == date1.toString()
    })
    console.log(this.filteredData)
    this.filteredData.filter((element) => {
      if(element.time == "9:00 AM") {
        this.timeslot.time1 = true;
      } else if(element.time == "9:30 AM") {
        this.timeslot.time2 = true;
      } else if(element.time == "10:00 AM") {
        this.timeslot.time3 = true;
      } else if(element.time == "10:30 AM") {
        this.timeslot.time4 = true;
      }else if(element.time == "11:00 AM") {
        this.timeslot.time5 = true;
      } else if(element.time == "11:30 AM") {
        this.timeslot.time6 = true;
      }else if(element.time == "5:00 PM") {
        this.timeslot.time7 = true;
      } else if(element.time == "5:30 PM") {
        this.timeslot.time8 = true;
      } else if(element.time == "6:00 PM") {
        this.timeslot.time9 = true;
      } else if(element.time == "6:30 PM") {
        this.timeslot.time10 = true;
      } else if(element.time == "7:00 PM") {
        this.timeslot.time11 = true;
      } else if(element.time == "7:30 PM") {
        this.timeslot.time12 = true;
      } else if(element.time == "8:00 PM") {
        this.timeslot.time13 = true;
      } else if(element.time == "8:30 PM") {
        this.timeslot.time14 = true;
      }
    })
  }

// method to open Dialog
  openSlot() {
    this.dialogRef = this._matDialog.open(AddSlotComponent, {
      width: '600px',
      panelClass: 'contact-form-dialog',
      data: {
        action: 'edit',
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }

    });
  }

  
}

