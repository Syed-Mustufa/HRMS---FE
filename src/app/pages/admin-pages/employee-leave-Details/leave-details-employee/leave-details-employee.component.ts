import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-leave-details-employee',
  templateUrl: './leave-details-employee.component.html',
  styleUrls: ['./leave-details-employee.component.scss']
})
export class LeaveDetailsEmployeeComponent implements OnInit {
// obj:any;
  constructor(
    private route: ActivatedRoute,
    private api: ServicesService,
    private router: Router) {
      const id = this.route.snapshot.params["id"];
      console.log(id);
      this.api.getLeaveFormDetailsByleaveForm_id(id).subscribe((res) => {
        this.obj = res;
        console.log(this.obj);
  
        
      });
     }

  ngOnInit(): void {


  }
  public obj:any={"employeeId" : "1002",
  "nameOfEmployee": "YourEmployeeName",
"email": "employee@example.com",
"contactNumber": "1234567890",
"emergencyContactNumber": "9876543210",
"designation": "Employee Designation",
"department": "Employee Department",
"requestDate": "2023-10-10",
"leaveType": "Vacation",
"leaveReason": "Vacation Reason",
"startDate": "2023-10-15",
"endDate": "2023-10-20",
"approvalStatus" : "Rejected",
"numberOfDaysRequested": 6,
"approvingManagerName": "Furqan Khan",
"approvalRemarks": "Ok"

}
  

 public navigate(id: string) {
    this.router.navigate([`/approval-leave-form/${id}`]);
  }

}
