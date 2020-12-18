import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource;
  displayedColumns = [];
  today = new Date();
  allData=[];
  filteredData=[];
  columnNames = [{
    id: 'position',
    value: 'No.',

  }, {
    id: 'name',
    value: 'PatientName',
  },
    {
      id: 'date',
      value: 'Date',
    },
    {
      id: 'age',
      value: 'Age',
    },
    {
      id: 'time',
      value: 'Timing',
    },
    {
      id: 'mobileNo',
      value: 'contact',
    }];
  constructor( public appService: AppointmentService) { }

  ngOnInit() {
    this.appService.getPatient().subscribe((res: any) => {
      console.log(res)
      this.dataSource = new MatTableDataSource(res);
      this.allData = res;
      this.filteredData = res;
    })
    this.displayedColumns = this.columnNames.map(x => x.id);
     
  }

  selectedDate;
  onSelect(event) {
    console.log(event.target.value);
    this.selectedDate = event.target.value;
    this.dataSource = new MatTableDataSource(this.filteredData = this.allData.filter((element) => {
      debugger 
      console.log(new Date(element.date))
      console.log(new Date(this.selectedDate))
      var date = new Date(element.date);
      var date1 = new Date(this.selectedDate);
      return date.toString() == date1.toString()
    }));
    
    
  }
 
}
