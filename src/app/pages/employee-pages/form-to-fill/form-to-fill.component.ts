// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import jwtDecode from 'jwt-decode';
// import { ServicesService } from 'src/app/services/services.service';

// @Component({
//   selector: 'app-form-to-fill',
//   templateUrl: './form-to-fill.component.html',
//   styleUrls: ['./form-to-fill.component.scss']
// })
// export class FormToFillComponent implements OnInit {
//   public LeaveForm:FormGroup;
// //   public obj:any= {
// //     "employeeId": 1002,
// //     "namePrefix": "mr",
// //     "firstName": "shahzeb a",
// //     "middleName": "Smith",
// //     "lastName": "khan",
// //     "fathersFirstName": "Mr Michael",
// //     "fathersMiddleName": "William",
// //     "fathersLastName": "Doe",
// //     "dateOfBirth": "29-03-2000",
// //     "age": 23,
// //     "maritalStatus": "Single",
// //     "phoneCode": "+91",
// //     "personalContactNo": "1234567890",
// //     "passportSizePhoto": null,
// //     "email": "random3@gmail.com",
// //     "citizenship": "USA",
// //     "permanentResidenceCountry": "USA",
// //     "permanentResidentialAddress": "123 Main Street, City, State, Country",
// //     "bloodGroup": "A+",
// //     "workedInUAE": "yes",
// //     "hobbies": "Reading, Traveling",
// //     "status": "Active",
// //     "empStatus": "New employee",
// //     "psDetail": {
// //         "passportIssuingCountry": "USA",
// //         "passportNumber": "123456789",
// //         "passportExpiryDate": "10-07-2025",
// //         "passportScan": null
// //     },
// //     "license": {
// //         "drivinglicense": "false",
// //         "licenseType": "car",
// //         "ownvehicle": "true",
// //         "licensecopy": null
// //     },
// //     "relative": {
// //         "relativenamePrefix": "Mr",
// //         "relationship": "Sibling",
// //         "relativeid": null,
// //         "rfirstname": "Jane",
// //         "rmiddlename": "Doe",
// //         "rphoneCode": "+91",
// //         "raddress": "456 Oak Street, City, State, Country",
// //         "rcontactno": "9876543210",
// //         "raddressproof": null,
// //         "rlastname": "Smith"
// //     },
// //     "visainfo": {
// //         "workVisaEmirateId": "0987654321",
// //         "categoryOfVisa": "visa",
// //         "siGlobalWorkVisaCompany": "ACME Corp",
// //         "visaIssueyDate": "02-02-2009",
// //         "visaExpiryDate": "31-10-2023",
// //         "visaEmailSend20and60daysBefore": true,
// //         "visaEmailSend4daysBefore": false,
// //         "visaEmailSend3daysBefore": false,
// //         "visaEmailSend2daysBefore": false,
// //         "visaEmailSend1dayBefore": false,
// //         "visaDocs": null,
// //         "visaType": "Work Visa",
// //         "visaEmailSend10and30daysBefore": true
// //     },
// //     "educations": [
// //         {
// //             "id": 1,
// //             "secondaryIssuingAuthority": "10",
// //             "secondarymarksOrGrade": "90",
// //             "secondaryyear": "2010",
// //             "secondaryDocumentScan": null,
// //             "seniorSecondaryIssuingAuthority": "Bhopal 2",
// //             "seniorSecondaryMarksOrGrade": "80",
// //             "seniorSecondaryYear": "2011",
// //             "seniorSecondaryDocumentScan": null,
// //             "graduationIssuingAuthority": "bhopal 3",
// //             "graduationMarksOrGrade": "70",
// //             "graduationYear": "2012",
// //             "graduationDocumentScan": null,
// //             "postGraduationIssuingAuthority": "Bhopal 4",
// //             "postGraduationMarksOrGrade": "60",
// //             "postGraduationYear": "2013",
// //             "postGraduationDocumentScan": null,
// //             "diplomaIssuingAuthority": "diplomaIssuingAuthority",
// //             "diplomaMarksOrGrade": "diplomaMarksOrGrade",
// //             "diplomaYear": "diplomaYear",
// //             "diplomaDocumentScan": null
// //         }
// //     ],
// //     "othersQualifications": [
// //         {
// //             "id": 1,
// //             "others": "other",
// //             "othersIssuingAuthority": "bhopal ",
// //             "othersMarksOrGrade": "5",
// //             "othersYear": "2010",
// //             "othersDocumentScan": null
// //         },
// //         {
// //             "id": 2,
// //             "others": "new other",
// //             "othersIssuingAuthority": "bhopal 5",
// //             "othersMarksOrGrade": "50",
// //             "othersYear": "2014",
// //             "othersDocumentScan": null
// //         }
// //     ],
// //     "professionalQualifications": [
// //         {
// //             "id": 1,
// //             "qualification": "MBA ",
// //             "issuingAuthority": "bhopal ",
// //             "gradingSystem": "dddd ",
// //             "yearOfQualification": "2010 ",
// //             "grade": "B+",
// //             "degreeScan": null
// //         },
// //         {
// //             "id": 2,
// //             "qualification": "MBA 2",
// //             "issuingAuthority": "bhopal 2",
// //             "gradingSystem": "dddd 2",
// //             "yearOfQualification": "2010 2",
// //             "grade": "B+ 2",
// //             "degreeScan": null
// //         }
// //     ],
// //     "oldEmployee": [
// //         {
// //             "previousId": 1,
// //             "companyName": "aibs",
// //             "companyAddress": "bhopal",
// //             "designation": "aaa",
// //             "description": "DDD",
// //             "dateFrom": "20-02-2016",
// //             "dateTo": "20-02-2030",
// //             "previousManagerName": "SSSSS",
// //             "previousManagerPhoneCode": "91",
// //             "previousManagerContact": "09876543",
// //             "previousHRName": "ali",
// //             "previousHRPhoneCode": "91",
// //             "previousHRContact": "dddd",
// //             "lastWithdrawnSalary": 900001.0,
// //             "payslipScan": null,
// //             "empAchievements": [
// //                 {
// //                     "id": 1,
// //                     "achievementRewardsName": "Best of employee of the year",
// //                     "achievementsRewardsDocs": null
// //                 },
// //                 {
// //                     "id": 2,
// //                     "achievementRewardsName": "Best of employee of the month",
// //                     "achievementsRewardsDocs": null
// //                 }
// //             ]
// //         }
// //     ],
// //     "bgcheck": {
// //         "id": 1,
// //         "status": "india ",
// //         "doneBy": "done",
// //         "internalConcernedManager": "llll",
// //         "externalName": "externalName",
// //         "externalPost": "externalPost",
// //         "externalCompanyName": "externalCompanyName",
// //         "externalPhoneCode": "externalPhoneCode",
// //         "externalPhoneNo": "externalPhoneNo",
// //         "managerApproval": "pppp",
// //         "managerName": "rahil",
// //         "remark": "good",
// //         "addressVerified": "oooo",
// //         "previousEmploymentStatusVerified": "eeeee",
// //         "previousDesignationAndResponsibilityVerified": "uuuuuuu",
// //         "idProofDocumentVerified": "Verified",
// //         "educationalQualificationVerified": "errrrrrr",
// //         "criminalRecords": "tttt",
// //         "punishmentForImprisonmentApproval": "Approval",
// //         "recordsheet": null,
// //         "declarationRequired": null
// //     },
// //     "training": [
// //         {
// //             "id": 1,
// //             "trainingType": "lll",
// //             "inHouseOutsource": "aaaa",
// //             "paidUnpaid": "hhh",
// //             "trainingStartDate": "32223",
// //             "trainingEndDate": "wwww",
// //             "trainerFeedback": "jjjj",
// //             "trainerName": "trainerName",
// //             "trainerPost": "trainerPost",
// //             "trainerDepartment": "trainerDepartment",
// //             "trainerPhoneCode": "trainerPhoneCode",
// //             "trainerPhoneNo": "trainerPhoneNoString",
// //             "certificateUploadedForOutsource": null,
// //             "paidTrainingDocumentProof": null
// //         }
// //     ],
// //     "jobDetails": [
// //         {
// //             "id": 1,
// //             "jobPostDesignation": "job",
// //             "companyEmailIdProvided": "job",
// //             "companyEmailId": "job",
// //             "jobLevel": "job",
// //             "postedLocation": "job",
// //             "basicAllowance": "job",
// //             "houseRentAllowance": "job",
// //             "houseRentAmount": "job",
// //             "foodAllowance": "job",
// //             "foodAllowanceAmount": "job",
// //             "vehicleAllowance": "job",
// //             "vehicleAllowanceAmount": "job",
// //             "uniformAllowance": "job",
// //             "uniformAllowanceAmount": "job",
// //             "travellingAllowances": "job",
// //             "travellingAllowancesAmount": "job",
// //             "educationalAllowance": "job",
// //             "educationalAllowanceAmount": "job",
// //             "otherAllowance": "job",
// //             "otherAllowanceAmount": "job",
// //             "vehicle": "job",
// //             "vehicleNumber": "job",
// //             "vehicleModelName": "job",
// //             "vehicleModelYear": "job",
// //             "isVehicleNewOrPreowned": "job",
// //             "cashOrChipFacility": "yes",
// //             "chipNumber": "0987654987",
// //             "accommodationYesOrNo": "job",
// //             "isShredOrSeparate": "job",
// //             "isExeutiveOrLabourFacility": "job",
// //             "electricityAllocationYesOrNo": "job",
// //             "electricityAllocationAmount": "job",
// //             "rentAllocationYesOrNo": "job",
// //             "rentAllocationAmount": "job",
// //             "mobileIssuedOrNot": "job",
// //             "simIssuedOrNot": "job",
// //             "flightFacilities": "job",
// //             "howMuchTime": "job",
// //             "familyTicketsAlsoProvidedOrNot": "job",
// //             "othersAccomandation": "job",
// //             "healthInsuranceCoverage": "job",
// //             "maximumAmountGiven": "job",
// //             "familyHealthInsuranceGivenOrNot": "job",
// //             "familyHealthInsuranceType": "type",
// //             "punchingMachineYesOrNo": "job",
// //             "joiningDate": "job",
// //             "jobdepartment": "joib",
// //             "referredBy": "yes",
// //             "byWhom": "mustufa"
// //         }
// //     ],
// //     "leaveApprovals": [],
// //     "otherIdProofDoc": null,
// //     "emiratesID": "1234567890",
// //     "degreeAttestation": "yes"
// // }
// public obj:any;

//   constructor(private services : ServicesService,private formBuilder:FormBuilder) { }

//   ngOnInit(): void {
//         const token = this.services.getToken();
//     console.log(token)
//     if (token) {
//       const decodedToken: any = jwtDecode(token);
//       const userId = decodedToken.sub; 
//       console.log(userId) // Assuming 'id' is the property in the decoded token
//       this.services.personalInfo(userId).subscribe((success)=>{
//         console.log(success)
//         this.obj=success
//       })
//       // if (userId) {
//       //   this.services.personalInfo(userId).subscribe((result : any) => {
//       //     console.log(result);
//       //   });
//       // } else {
//       //   console.error('User ID not found in the token.');
//       // }
//     } else {
//       console.error('Token not found.');
//     }
//     this.initLeaveForm()

//   }

//   public initLeaveForm(){
//     this.LeaveForm = this.formBuilder.group({
//       employeeId:[this.obj?.employeeId],
//       nameOfEmployee:[this.obj?.namePrefix + this.obj?.firstName  + this.obj?.middleName+ this.obj?.lastName],
//       email:[this.obj.email],
//       contactNumber:[this.obj?.phoneCode + this.obj?.personalContactNo],
//       designation:[this.obj?.jobDetails[0].jobPostDesignation],
//       department:[this.obj?.jobDetails[0].jobdepartment],
//       emergencyContactNumber:[''],
//       requestDate:[''],
//       leaveType:[''],
//       leaveReason:[''],
//       startDate:[''],
//       endDate:[''],
//       numberOfDaysRequested:[''],
//       approvalStatus:[false],
//       approvingManagerName:[null],
//       approvalRemarks:[null]






//     })
//   }
//   postLeaveForm(){
//     console.log(this.LeaveForm.value)

//   }
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-form-to-fill',
  templateUrl: './form-to-fill.component.html',
  styleUrls: ['./form-to-fill.component.scss']
})
export class FormToFillComponent implements OnInit {
  public LeaveForm: FormGroup;
  selectedDate:any;
  startDate: any;
  endDate: any;
  difference: any;
  public obj:any={
    "employeeId": 1003,
    "namePrefix": "mr",
    "firstName": "shahzeb a",
    "middleName": "Smith",
    "lastName": "khan",
    "fathersFirstName": "Mr Michael",
    "fathersMiddleName": "William",
    "fathersLastName": "Doe",
    "dateOfBirth": "01/20/1990",
    "age": 33,
    "maritalStatus": "Single",
    "phoneCode": "+91",
    "personalContactNo": "1234567890",
    "passportSizePhoto": null,
    "email": "mustufa@gmail.com",
    "citizenship": "USA",
    "permanentResidenceCountry": "USA",
    "permanentResidentialAddress": "123 Main Street, City, State, Country",
    "bloodGroup": "A+",
    "workedInUAE": "yes",
    "hobbies": "Reading, Traveling",
    "status": "Active",
    "psDetail": {
        "passportIssuingCountry": "USA",
        "passportNumber": "123456789",
        "passportExpiryDate": "10-07-2025",
        "passportScan": null
    },
    "license": {
        "drivinglicense": "false",
        "licenseType": "car",
        "ownvehicle": "true",
        "licensecopy": null
    },
    "relative": {
        "relativenamePrefix": "Mr",
        "relationship": "Sibling",
        "relativeid": null,
        "rphoneCode": "+91",
        "rcontactno": "9876543210",
        "raddressproof": null,
        "raddress": "456 Oak Street, City, State, Country",
        "rlastname": "Smith",
        "rfirstname": "Jane",
        "rmiddlename": "Doe"
    },
    "visainfo": {
        "workVisaEmirateId": "0987654321",
        "categoryOfVisa": "visa",
        "siGlobalWorkVisaCompany": "ACME Corp",
        "visaIssueyDate": "20-01-2010",
        "visaExpiryDate": "2023-08-19",
        "visaDocs": null,
        "visaType": "Work Visa"
    },
    "educations": [
        {
            "id": 3,
            "secondaryIssuingAuthority": "10",
            "secondarymarksOrGrade": "90",
            "secondaryyear": "2010",
            "secondaryDocumentScan": null,
            "seniorSecondaryIssuingAuthority": "Bhopal 2",
            "seniorSecondaryMarksOrGrade": "80",
            "seniorSecondaryYear": "2011",
            "seniorSecondaryDocumentScan": null,
            "graduationIssuingAuthority": "bhopal 3",
            "graduationMarksOrGrade": "70",
            "graduationYear": "2012",
            "graduationDocumentScan": null,
            "postGraduationIssuingAuthority": "Bhopal 4",
            "postGraduationMarksOrGrade": "60",
            "postGraduationYear": "2013",
            "postGraduationDocumentScan": null,
            "diplomaIssuingAuthority": "diplomaIssuingAuthority",
            "diplomaMarksOrGrade": "diplomaMarksOrGrade",
            "diplomaYear": "diplomaYear",
            "diplomaDocumentScan": null
        }
    ],
    "othersQualifications": [
        {
            "id": 5,
            "others": "other",
            "othersIssuingAuthority": "bhopal ",
            "othersMarksOrGrade": "5",
            "othersYear": "2010",
            "othersDocumentScan": null
        },
        {
            "id": 6,
            "others": "new other",
            "othersIssuingAuthority": "bhopal 5",
            "othersMarksOrGrade": "50",
            "othersYear": "2014",
            "othersDocumentScan": null
        }
    ],
    "professionalQualifications": [
        {
            "id": 5,
            "qualification": "MBA ",
            "issuingAuthority": "bhopal ",
            "gradingSystem": "dddd ",
            "yearOfQualification": "2010 ",
            "grade": "B+",
            "degreeScan": null
        },
        {
            "id": 6,
            "qualification": "MBA 2",
            "issuingAuthority": "bhopal 2",
            "gradingSystem": "dddd 2",
            "yearOfQualification": "2010 2",
            "grade": "B+ 2",
            "degreeScan": null
        }
    ],
    "oldEmployee": [
        {
            "previousId": 3,
            "companyName": "aibs",
            "companyAddress": "bhopal",
            "designation": "aaa",
            "description": "DDD",
            "dateFrom": "20-02-2016",
            "dateTo": "20-02-2030",
            "previousManagerName": "SSSSS",
            "previousManagerPhoneCode": "91",
            "previousManagerContact": "09876543",
            "previousHRName": "ali",
            "previousHRPhoneCode": "91",
            "previousHRContact": "dddd",
            "lastWithdrawnSalary": 900001.0,
            "payslipScan": null,
            "empAchievements": [
                {
                    "id": 5,
                    "achievementRewardsName": "Best of employee of the year",
                    "achievementsRewardsDocs": null
                },
                {
                    "id": 6,
                    "achievementRewardsName": "Best of employee of the month",
                    "achievementsRewardsDocs": null
                }
            ]
        }
    ],
    "bgcheck": {
        "id": 3,
        "status": "india ",
        "doneBy": "done",
        "internalConcernedManager": "llll",
        "externalName": "externalName",
        "externalPost": "externalPost",
        "externalCompanyName": "externalCompanyName",
        "externalPhoneCode": "externalPhoneCode",
        "externalPhoneNo": "externalPhoneNo",
        "managerApproval": "pppp",
        "managerName": "rahil",
        "remark": "good",
        "addressVerified": "oooo",
        "previousEmploymentStatusVerified": "eeeee",
        "previousDesignationAndResponsibilityVerified": "uuuuuuu",
        "idProofDocumentVerified": "Verified",
        "educationalQualificationVerified": "errrrrrr",
        "criminalRecords": "tttt",
        "punishmentForImprisonmentApproval": "Approval",
        "recordsheet": null,
        "declarationRequired": null
    },
    "training": [
        {
            "id": 3,
            "trainingType": "lll",
            "inHouseOutsource": "aaaa",
            "paidUnpaid": "hhh",
            "trainingStartDate": "32223",
            "trainingEndDate": "wwww",
            "trainerFeedback": "jjjj",
            "trainerName": "trainerName",
            "trainerPost": "trainerPost",
            "trainerDepartment": "trainerDepartment",
            "trainerPhoneCode": "trainerPhoneCode",
            "trainerPhoneNo": "trainerPhoneNoString",
            "paidTrainingDocumentProof": null,
            "certificateUploadedForOutsource": null
        }
    ],
    "jobDetails": [
        {
            "id": 3,
            "jobPostDesignation": "job",
            "companyEmailIdProvided": "job",
            "companyEmailId": "job",
            "jobLevel": "job",
            "postedLocation": "job",
            "basicAllowance": "job",
            "houseRentAllowance": "job",
            "houseRentAmount": "job",
            "foodAllowance": "job",
            "foodAllowanceAmount": "job",
            "vehicleAllowance": "job",
            "vehicleAllowanceAmount": "job",
            "uniformAllowance": "job",
            "uniformAllowanceAmount": "job",
            "travellingAllowances": "job",
            "travellingAllowancesAmount": "job",
            "educationalAllowance": "job",
            "educationalAllowanceAmount": "job",
            "otherAllowance": "job",
            "otherAllowanceAmount": "job",
            "vehicle": "job",
            "vehicleNumber": "job",
            "vehicleModelName": "job",
            "vehicleModelYear": "job",
            "isVehicleNewOrPreowned": "job",
            "cashOrChipFacility": "yes",
            "chipNumber": "0987654987",
            "accommodationYesOrNo": "job",
            "isShredOrSeparate": "job",
            "isExeutiveOrLabourFacility": "job",
            "electricityAllocationYesOrNo": "job",
            "electricityAllocationAmount": "job",
            "rentAllocationYesOrNo": "job",
            "rentAllocationAmount": "job",
            "mobileIssuedOrNot": "job",
            "simIssuedOrNot": "job",
            "flightFacilities": "job",
            "howMuchTime": "job",
            "familyTicketsAlsoProvidedOrNot": "job",
            "othersAccomandation": "job",
            "healthInsuranceCoverage": "job",
            "maximumAmountGiven": "job",
            "familyHealthInsuranceGivenOrNot": "job",
            "familyHealthInsuranceType": "type",
            "punchingMachineYesOrNo": "job",
            "joiningDate": "job",
            "jobdepartment": "joib",
            "referredBy": "yes",
            "byWhom": "mustufa"
        }
    ],
    "degreeAttestation": "yes",
    "otherIdProofDoc": null,
    "emiratesID": "1234567890"
  }

  constructor(private services: ServicesService, private formBuilder: FormBuilder,private router: Router) {
    const today = new Date();
    this.selectedDate = today.toISOString().slice(0, 10);
    console.log(this.selectedDate);
  }

  ngOnInit(): void {
    const token = this.services.getToken();
    console.log(token);

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.sub;
      console.log(userId);

      this.services.personalInfo(userId).subscribe((success) => {

        console.log(success);
        this.obj = success;

    //     // Initialize the form after getting data
        this.initLeaveForm();
      });
    } else {
      console.error('Token not found.');
    }
  }


  // Create a method to calculate the difference
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

  public initLeaveForm() {
    // this.startDate = this.obj.startDate; 
    // this.endDate=this.obj?.endDate
    this.LeaveForm = this.formBuilder.group({
      employeeId: [this.obj?.employeeId],
      nameOfEmployee: [`${this.obj?.namePrefix} ${this.obj?.firstName} ${this.obj?.middleName} ${this.obj?.lastName}`],
      email: [this.obj?.email],
      contactNumber: [`${this.obj?.phoneCode} ${this.obj?.personalContactNo}`],
      designation: [this.obj?.jobDetails[0]?.jobPostDesignation],
      department: [this.obj?.jobDetails[0]?.jobdepartment],
      emergencyContactNumber: [''],
      requestDate: [''],
      leaveType: [''],
      leaveReason: [''],
      startDate: [''],
      endDate: [''],
      numberOfDaysRequested: [''],
      approvalStatus: ["Pending"],
      approvingManagerName: [null],
      approvalRemarks: [null],
    });
  }
  
  // postLeaveForm(){}
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
    numberOfDaysRequested:+this.LeaveForm.value.numberOfDaysRequested,
    approvalStatus:this.LeaveForm.value.approvalStatus,
    approvingManagerName:this.LeaveForm.value.approvingManagerName,
    approvalRemarks:this.LeaveForm.value.approvalRemarks
  }
  const formFileData = new FormData();
      formFileData.append('leaveApproval', JSON.stringify(leaveApproval))
  this.services.leaveformPost(formFileData).subscribe((data)=>{
    console.log("succes apllied Leave Forms")
  })

}

    // Here, you can handle form submission and send the data to your server.
  }
  navigate(id:any){

    this.router.navigate([`leave-update/${id}`]);
  }


}
