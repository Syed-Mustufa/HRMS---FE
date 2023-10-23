import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-approvalleaveform',
  templateUrl: './approvalleaveform.component.html',
  styleUrls: ['./approvalleaveform.component.scss']
})
export class ApprovalleaveformComponent implements OnInit {
  public LeaveForm: FormGroup;
  selectedDate:any;
  startDate: any;
  endDate: any;
  difference: any;
  status:any;
  managerName:any;
  data:any;
  // data:any
  public id :any
  constructor(private formBuilder:FormBuilder, private services:ServicesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchIdThroughToken()
    // console.log(this.data.firstName)

    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.services.getLeaveFormDetailsByleaveForm_id(this.id).subscribe((res) => {
      this.obj = res;
      console.log(this.obj);

      
    });


    this.initLeaveForm()
  }
  calculateDifference() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      // Calculate the difference in days
      const differenceInTime = end.getTime() - start.getTime();
      this.difference = differenceInTime / (1000 * 3600 * 24);
      console.log(this.difference);
    }
  }

  public fetchIdThroughToken(){
    const token = this.services.getToken();
    console.log(token)
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.sub; 
      console.log(userId) // Assuming 'id' is the property in the decoded token
      this.services.personalInfo(userId).subscribe((success)=>{
        console.log(success)
        // this.data=success;
        // // console.log(this.data.firstName)
        // this.data=success
       
        
        // this.object=success
      })
      // if (userId) {
      //   this.services.personalInfo(userId).subscribe((result : any) => {
      //     console.log(result);
      //   });
      // } else {
      //   console.error('User ID not found in the token.');
      // }
    } else {
      console.error('Token not found.');
    }
  }
  // console.log(id)
  
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
  public initLeaveForm() {
    this.status=this.obj?.approvalStatus
    console.log(this.status)
    this.startDate = this.obj.startDate;
    this.endDate=this.obj?.endDate;
    this.LeaveForm = this.formBuilder.group({
      employeeId: [this.obj?.employeeId],
      nameOfEmployee: [
        
         
          this.obj?.nameOfEmployee,
      ],
      email: [this.obj.email],
      contactNumber: [
        this.obj?.contactNumber,
      ],
      designation: [this.obj?.designation],
      department: [this.obj?.department],
      emergencyContactNumber: [this.obj?.emergencyContactNumber],
      requestDate: [this.obj?.requestDate],
      leaveType: [this.obj?.leaveType],
      leaveReason: [this.obj?.leaveReason],
      startDate: [this.startDate],
      endDate: [this.endDate],
      numberOfDaysRequested: [this.obj?.numberOfDaysRequested],
      approvalStatus: [this.status],
      approvingManagerName: [''],
      approvalRemarks: [''],
    });
  }


  postLeaveForm() {
    console.log(this.LeaveForm.value);
    // let leaveApproval={this.LeaveForm.value}
    // this.services.leaveformPost(leaveApproval).subscribe((data)=>{
    //   console.log("suceesfull post Leave Form")
    // })
if(this.LeaveForm.valid){
  let leaveApproval ={
    employeeId:this.LeaveForm.value.employeeId,
    nameOfEmployee:this.LeaveForm.value.nameOfEmployee,
    email:this.LeaveForm.value.email,
    contactNumber:this.LeaveForm.value.contactNumber,
    emergencyContactNumber:this.LeaveForm.value.emergencyContactNumber,
    designation:this.LeaveForm.value.designation,
    department:this.LeaveForm.value.department,
    requestDate:this.LeaveForm.value.requestDate,
    leaveType:this.LeaveForm.value.leaveType,
    leaveReason:this.LeaveForm.value.leaveReason,
    startDate:this.LeaveForm.value.startDate,
    endDate:this.LeaveForm.value.endDate,
    numberOfDaysRequested:this.LeaveForm.value.numberOfDaysRequested,
    approvingManagerName:this.LeaveForm.value.approvingManagerName,
    approvalStatus:this.LeaveForm.value.approvalStatus,
    approvalRemarks:this.LeaveForm.value.approvalRemarks
  }
  const formFileData = new FormData();
      formFileData.append('leaveApproval', JSON.stringify(leaveApproval))
  this.services.updateLeaveForm(this.id,formFileData).subscribe((data)=>{
    console.log("succes apllied Leave Forms")
  })

}

    // Here, you can handle form submission and send the data to your server.
  }


}
