import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppointmentService} from "../service/appointment.service";
@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.scss']
})
export class AddSlotComponent implements OnInit {
  addSlotForm;
  Time = [
    {value:'9:00 AM', viewValue: '9:00 AM'},
    {value:'9:30 AM', viewValue: '9:30 AM'},
    {value:'10:00 AM', viewValue: '10:00 AM'},
    {value:'10:30 AM', viewValue: '10:30 AM'},
    {value:'11:00 AM', viewValue: '11:00 AM'},
    {value:'11:30 AM', viewValue: '11:30 AM'},
    {value:'5:00 PM', viewValue: '5:00 PM'},
    {value:'5:30 PM', viewValue: '5:30 PM'},
    {value:'6:00 PM', viewValue: '6:00 PM'},
    {value:'6:30 PM', viewValue: '6:30 PM'},
    {value:'7:00 PM', viewValue: '7:00 PM'},
    {value:'7:30 PM', viewValue: '7:30 PM'},
    {value:'8:00 PM', viewValue: '8:00 PM'},
    {value:'8:30 PM', viewValue: '8:30 PM'},
  ];
  constructor( public appService: AppointmentService,public matDialogRef: MatDialogRef<AddSlotComponent>) { }


  ngOnInit(): void {
    this.addSlotForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'age': new FormControl('', [Validators.required]),
      'mobileNo': new FormControl('', [Validators.required]),
      'date': new FormControl('', [Validators.required]),
      'time': new FormControl('', [Validators.required]),
    });
  }

  submit() {
    console.log(this.addSlotForm.value)
    this.appService.addPatient(this.addSlotForm.value).subscribe((res: any) => {
      console.log(res);
    })
    this.matDialogRef.close(true);
  }

}
