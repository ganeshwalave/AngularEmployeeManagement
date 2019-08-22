import { Component, OnInit } from '@angular/core';
import { HttpClientService} from './../service/http-client.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[HttpClientService]
})
export class EmployeeComponent implements OnInit {

	employees;
  constructor(private httpclient:HttpClientService) { }

  ngOnInit() {
	  this.httpclient.getEmployees().subscribe(result=>{
		  this.employees=result;
	  })
  }

}
