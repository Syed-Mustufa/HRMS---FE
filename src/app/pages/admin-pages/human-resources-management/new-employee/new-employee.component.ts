import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Country, State, City } from 'country-state-city';
import { distinctUntilChanged } from 'rxjs';
// import { ApiService } from '../services/api.service';
import { DatePipe, formatDate } from '@angular/common';
import { ServicesService } from 'src/app/services/services.service';

// export class newEmployee {
//   public obj: any = {
//   };
//   public constructor(init?: any) {
//     init.forEach((e: any, index: any) => {
//       this.obj[index] = e
//     })
//     console.log(this.obj);
//   }
// }

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  // public minDate:any;

  public currentDate!: string;
  
  public step:any=1;
  public postForm!: FormGroup;
  public Countries: any[] = []

  constructor(private apiService: ServicesService, private formBuilder: FormBuilder,  ) {
    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    // const newDate= new Date;
    // this.minDate=this.datePipe.transform(newDate,'yyyy-MM-dd')

  }
  public fileUploaderConfig = {
    multiple: false,
    animation: false,
  };

  //method for uploading the files
  public uploadFile(event: any) {
    console.log(event.target.name);

    let file = (event.target as HTMLInputElement).files![0];
    switch (event.target.name) {
      case 'passportSizePhoto':
        this.postForm?.patchValue({
          passportSizePhoto: file
        })
        break;
      case 'scannedCopyOfLincense':
        this.postForm?.patchValue({
          scannedCopyOfLincense: file
        })
        break;
      case 'passportScannedCopy':
        this.postForm?.patchValue({
          passportScannedCopy: file
        })
        break;
      case 'otherScannedIdProof':
        this.postForm?.patchValue({
          otherScannedIdProof: file
        })
        break;
      case 'ScannedCopyOfRealtiveAddress':
        this.postForm?.patchValue({
          ScannedCopyOfRealtiveAddress: file
        })
        break;
      case 'ScannedCopyOfRealtiveId':
        this.postForm?.patchValue({
          ScannedCopyOfRealtiveId: file
        })
        break;
      case 'ScannedCopyOfCourseCompleted':
        this.postForm?.patchValue({
          ScannedCopyOfCourseCompleted: file
        })
        break;
      case 'ScannedCopyOfDiploma':
        this.postForm?.patchValue({
          ScannedCopyOfDiploma: file
        })
        break;
      case 'ScannedCopyOfPostGraduation':
        this.postForm?.patchValue({
          ScannedCopyOfPostGraduation: file
        })
        break;
      case 'ScannedCopyOfGraduation':
        this.postForm?.patchValue({
          ScannedCopyOfGraduation: file
        })
        break;
      case 'ScannedCopyOfSeniorSecondary':
        this.postForm?.patchValue({
          ScannedCopyOfSeniorSecondary: file
        })
        break;
      case 'ScannedCopyOfSecondary':
        this.postForm?.patchValue({
          ScannedCopyOfSecondary: file

        })
        break;
      case 'SalaryScannedCopy':
        this.postForm?.patchValue({
          SalaryScannedCopy: file
        })
        break;
      case 'RecordSheet':
        this.postForm?.patchValue({
          RecordSheet: file
        })
        break;
      case 'CertificateUploadedForOutsource':
        this.postForm?.patchValue({
          CertificateUploadedForOutsource: file
        })
        break;
      case 'PaidTrainingDocumentProof':
        console.log(this.postForm.patchValue)
        this.postForm?.patchValue({
          PaidTrainingDocumentProof: file
        })
        break;

      case 'VisaScannedCopyOfID':
        this.postForm?.patchValue({
          VisaScannedCopyOfID: file
        })
        break;
      case 'ScanCopyOfAchivements':
        this.postForm?.patchValue({
          ScanCopyOfAchivements: file
        })
        break;
      case 'Declaration':
        this.postForm?.patchValue({
          Declaration: file
        })
        break;


    }
  }

  // method for reading the file using file reader
  public fileToBase64(file: any, callback: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      const base64String = reader.result;
      callback(base64String);
    };
  }


  public array:any=[];
  public professionalArray:any=[];
  public achivementArray:any=[];
  //method for selecting and convert it into base64 url
  onFileSelected(event: any, index: any) {
    switch (event.target.name) {
      case 'ScannedCopyOfOther':
        // var fileObject;;
        console.log(event.target.files);
        const file = event.target.files[0];
        this.array[index]=file;
        console.log(this.array);
        // const control = this.postForm.value.othersQualifications.at(index);
        // control.ScannedCopyOfOther = file;
      //   fileObject = {
      //     'lastModified'     : file.lastModified,
      //     'lastModifiedDate' : file.lastModifiedDate,
      //     'name'             : file.name,
      //     'size'             : file.size,
      //     'type'             : file.type
      //  };
        // then use JSON.stringify on File object
        // this.fileToBase64(file, function (base64String: any) {
        //   const serializedFile = btoa(base64String);
        //   control.ScannedCopyOfOther = serializedFile;
        // });
        break;
        case 'ScannedCopyOfCourseCompleted':
          console.log(event.target.files);
          const proffile = event.target.files[0];
          this.professionalArray[index]=proffile;
          console.log(this.professionalArray);

          break

          case 'ScanCopyOfAchivements':
            console.log(event.target.files);
          const achivefile = event.target.files[0];
          this.achivementArray[index]=achivefile;
          console.log(this.achivementArray);
          break


    }
    

  }
  ngOnInit() {
    
    
    this.initPostForm()
    this.Countries = Country.getAllCountries()

  }
  public employeeAge: number = 0;
  public getAge(event: any) {
    let enterDob: string = event.target.value;
    let dob_date = enterDob.split('-')
    let current_date = new Date()
    let current_year = current_date.getFullYear()
    let current_month = current_date.getMonth() + 1
    let current_day = current_date.getDate()

    let age = current_year - parseInt(dob_date[0]) - 1
    if (parseInt(dob_date[1]) <= current_month && parseInt(dob_date[2]) <= current_day) {
      age += 1
    }
    this.employeeAge = age;
  }
  // <input type="date" name="dateOfBirth" (input)="getAge($event)">

  // To automatically calculate the age based on the date of birth, bind the getAge function to the input event of the date of birth field in your template. For example:
  public onSelect(event: any) {
    switch (event.target.name) {
      case "workedInUAE":
        if (this.postForm.controls['workedInUAE'].value === 'No') {
          this.postForm.get('EmiratesID')?.disable();
        } else {
          this.postForm.get('EmiratesID')?.enable();
        }
        break;
      case "VisaType":
        if (this.postForm.controls['VisaType'].value === 'Visit Visa') {
          this.postForm.get('workVisaEmirateId')?.disable();
        } else {
          this.postForm.get('workVisaEmirateId')?.enable();
        }
        break;
      case "categoryOfVisa":
        if (this.postForm.controls['categoryOfVisa'].value === 'Own Work Visa') {
          this.postForm.get('siGlobalWorkVisaCompany')?.disable();
        } else {
          this.postForm.get('siGlobalWorkVisaCompany')?.enable();
        }
        break;
      case "managerApproval":
        if (this.postForm.controls['managerApproval'].value === 'Not Approved') {
          this.postForm.get('managerName')?.disable();
        } else {
          this.postForm.get('managerName')?.enable();
        }
        break;
      case "criminalRecords":
        if (this.postForm.controls['criminalRecords'].value === 'No') {
          this.postForm.get('RecordSheet')?.disable();
        } else {
          this.postForm.get('RecordSheet')?.enable();
        }
        break;

      case "punishmentForImprisonmentApproval":
        if (this.postForm.controls['punishmentForImprisonmentApproval'].value === 'No') {
          this.postForm.get('approvalsheet')?.disable();
        } else {
          this.postForm.get('approvalsheet')?.enable();
        }
        break;
      case "EmailIdProvided":
        if (this.postForm.controls['EmailIdProvided'].value === 'No') {
          this.postForm.get('CompanyEmployeeId')?.disable();
        } else {
          this.postForm.get('CompanyEmployeeId')?.enable();
        }
        break;



      case 'familyHealthInsuranceGivenOrNot':
        if (this.postForm.controls['familyHealthInsuranceGivenOrNot'].value === 'No') {
          this.postForm.get('familyHealthInsuranceType')?.disable();
        } else {
          this.postForm.get('familyHealthInsuranceType')?.enable();
        }
        break;


      case 'drivinglicense':
        if (this.postForm.controls['drivinglicense'].value === 'No') {
          this.postForm.get('scannedCopyOfLincense')?.disable();
        } else {
          this.postForm.get('scannedCopyOfLincense')?.enable();
        }
        break;
      case 'inHouseOutsource':
        if (this.postForm.controls['inHouseOutsource'].value === 'InHouse') {
          this.postForm.get('CertificateUploadedForOutsource')?.disable();
        } else {
          this.postForm.get('CertificateUploadedForOutsource')?.enable();
        }
        break;
      case 'paidUnpaid':
        if (this.postForm.controls['paidUnpaid'].value === 'Unpaid') {
          this.postForm.get('PaidTrainingDocumentProof')?.disable();
        } else {
          this.postForm.get('PaidTrainingDocumentProof')?.enable();
        }
        break;
    }
  }

  ngAfterViewInit() {
    // this.postForm.valueChanges!.pipe(
    //   distinctUntilChanged()
    // ).subscribe((value:any) => {
    //   console.log("=======================`",value?.typeOfVisa == 'Visit Visa');
    //   if(value?.typeOfVisa == 'Visit Visa'){
    //    this.postForm.get('workVisaEmirateId')?.disable();
    //   }else{
    //    this.postForm.get('workVisaEmirateId')?.enable();
    //   }


    // });
  }

  //method for getting post form controls
  get getPostFormControls() {
    return this.postForm.controls;
  }



  //method for initializing the form 
  public initPostForm() {
    this.postForm = this.formBuilder.group({
      namePrefix: 'Prefix',
      firstName: '',
      middleName: '',
      lastName: '',
      fathersFirstName: '',
      fathersMiddleName: '',
      fatherLastName: '',
      dateOfBirth: '',
      age: '',
      maritalStatus: 'Martial-Status',
      phoneCode: 'Code',
      personalContactNo: '',
      passportSizePhoto: [''],
      email: '',
      citizenship: 'Citizenship',
      passportIssuingCountry: 'Passport Issuing Country',
      passportNumber: '',
      passportScannedCopy: [''],
      passportExpiryDate: '',
      otherScannedIdProof: [''],
      bloodGroup: 'Select the Blood Group',
      permanentResidenceCountry: '',
      permanentResidentialAddress: '',
      hobbies: '',
      drivinglicense: 'Driving License of UAE',
      licenseType:'Type Of Lincense',
      scannedCopyOfLincense: [''],
      ownvehicle: 'Personal Vehicle',
      // bloodRealtive Starts here
      relativenamePrefix: 'Mr',
      RFirstname: '',
      Rmiddlename: '',
      Rlastname: '',
      relationship: '',
      RphoneCode: 'Code',
      Rcontactno: '',
      Raddress: '',
      ScannedCopyOfRealtiveAddress: [''],
      ScannedCopyOfRealtiveId: [''],
      // Visa Details Start Here
      workedInUAE: 'Whether Worked in UAE',
      EmiratesID: '',
      VisaType: 'Type Of Visa',
      workVisaEmirateId: '',
      categoryOfVisa: 'Categories Of Visa',
      siGlobalWorkVisaCompany: 'Visa issuing company',
      visaIssueyDate: '',
      visaExpiryDate: '',
      VisaScannedCopyOfID: [''],
      DegreeAttestation: 'Degree Attestation',
      // education Qualification

      // secondary details
      secondaryIssuingAuthority: '',
      secondarymarksOrGrade: '',
      secondaryyear: '',
      ScannedCopyOfSecondary: [''],
      // senior secondary details
      seniorSecondaryIssuingAuthority: '',
      seniorSecondaryMarksOrGrade: '',
      seniorSecondaryYear: '',
      ScannedCopyOfSeniorSecondary: [''],
      // graduation details
      graduationIssuingAuthority: '',
      graduationMarksOrGrade: '',
      graduationYear: '',
      ScannedCopyOfGraduation: [''],
      // post graduation details
      postGraduationIssuingAuthority: '',
      postGraduationMarksOrGrade: '',
      postGraduationYear: '',
      ScannedCopyOfPostGraduation: [''],

      diplomaIssuingAuthority: '',
      diplomaMarksOrGrade: '',
      diplomaYear: '',
      ScannedCopyOfDiploma: [''],

      othersQualifications: this.formBuilder.array([]),
      // others:'',
      // othersIssuingAuthority:'',
      // othersMarksOrGrade:'',
      // othersYear:'',
      // ScannedCopyOfOther:[''],


      // Professional education

      professionalQualifications: this.formBuilder.array([]),

      // previous employer
      companyName: '',
      companyAddress: '',
      designation: '',
      description: '',
      dateFrom: '',
      dateTo: '',
      previousManagerName: '',
      previousManagerPhoneCode: 'Code',
      previousManagerContact: '',
      previousHRName: '',
      previousHRPhoneCode: '',
      previousHRContact: '',

      // achievementsRewards: '',
      // ScanCopyOfAchivements: this.formBuilder.array([]),
      empAchievements : this.formBuilder.array([]),
      lastWithdrawnSalary: '',
      SalaryScannedCopy: [''],


      // background Check
      status: 'Background Check Status',
      doneBy: 'Checked By',
      internalConcernedManager: '',
      externalConcernedPerson: '',
      externalPost: '',
      externalCompanyName: '',
      externalPhoneCode: '',
      externalPhoneNo: '',
      managerApproval: 'Approved By Manager',
      managerName: '',
      remark: '',
      // document verification
      addressVerified: '',
      previousEmploymentStatusVerified: '',
      previousDesignationAndResponsibilityVerified: '',
      idProofDocumentVerified: '',
      educationalQualificationVerified: '',
      // Criminal Record
      criminalRecords: 'Select The Option',
      RecordSheet: [''],
      punishmentForImprisonmentApproval: 'Punishment For Imprisonment',
      approvalsheet: 'Aprroved By Authority',
      Declaration: [''],
      // Training Details
      trainingType: '',
      inHouseOutsource: 'Training Source',
      paidUnpaid: 'Training Details',
      CertificateUploadedForOutsource: [''],
      PaidTrainingDocumentProof: [''],
      trainingStartDate: '',
      trainingEndDate: '',
      trainerName: '',
      trainerPost: '',
      trainerDepartment: '',
      trainerPhoneCode: '',
      trainerPhoneNo: '',
      trainerFeedback: '',
      // jobs Details
      jobPostDesignation: '',
      jobdepartment: '',
      companyEmailIdProvided: 'Provided Email Id',
      companyEmailId: '',
      jobLevel: 'Job Levels',
      postedLocation: '',
      // payscale
      basicAllowance: '',
      houseRentAllowance: '',
      houseRentAmount: '',
      foodAllowance: '',
      foodAllowanceAmount: '',
      vehicleAllowance: '',
      vehicleAllowanceAmount: '',
      uniformAllowance: '',
      uniformAllowanceAmount: '',
      travellingAllowances: '',
      travellingAllowancesAmount: '',
      educationalAllowance: '',
      educationalAllowanceAmount: '',
      otherAllowance: '',
      otherAllowanceAmount: '',
      vehicle: 'Vehicle Issued',
      vehicleNumber: '',
      vehicleModelName: '',
      vehicleModelYear: '',
      isVehicleNewOrPreowned: 'Vehicle Type',
      vehicleFuelCashFacility: 'Vehicle Fuel',
      vehicleFuelChipFacility: '',

      accommodationYesOrNo: 'Accommodation Issued',
      isShredOrSeparate: 'Type of accomodation',
      isExeutiveOrLabourFacility: 'Type Of Shared Accomodation',
      electricityAllocationYesOrNo: 'Electricity Allocation',
      electricityAllocationAmount: '',
      rentAllocationYesOrNo: 'Rent Allocation',
      rentAllocationAmount: '',
      mobileIssuedOrNot: 'Mobile Issued',
      simIssuedOrNot: 'Sim Issued',
      flightFacilities: 'Flight Facilities',
      howMuchTime: 'Flight Facilities Period',
      familyTicketsAlsoProvidedOrNot: 'Family Tickets',
      othersAccomandation: '',

      healthInsuranceCoverage: 'Health Insurance Coverage',
      maximumAmountGiven: '',
      familyHealthInsuranceGivenOrNot: 'Family Health Insurance',
      familyHealthInsuranceType: 'Type Family Health Insurance',
      joiningDate: '',
      punchingMachineYesOrNo: 'Punching Machine',
      ReferedBy:'Refered By',
      ReferenceName:'',
    })

  }


  get empAchievements() {
    return this.postForm.get('empAchievements') as FormArray;
  }

  addempAchievementsField() {
    
    const achievementsRewardsfieldGroup = this.formBuilder.group({
      achievementRewardsName :''
      // ScannedCopyOfOther: [],
    });
    this.empAchievements.push(achievementsRewardsfieldGroup);
  }


  

  removeempAchievementsField(index: number) {
    this.empAchievements.removeAt(index);
  }

  // Getter for easy access to the dynamicFields FormArray for other qualification
  get othersQualifications() {
    return this.postForm.get('othersQualifications') as FormArray;
  }

  // Add a new field group to the dynamicFields FormArray other qualification
  addField() {
    const fieldGroup = this.formBuilder.group({
      others: '',
      othersIssuingAuthority: '',
      othersMarksOrGrade: '',
      othersYear: '',
      // ScannedCopyOfOther: [],
    });
    this.othersQualifications.push(fieldGroup);
  }

  // Remove a field group from the dynamicFields FormArray other qualification
  removeField(index: number) {
    this.othersQualifications.removeAt(index);
  }


  // Getter for easy access to the dynamicFields FormArray for other qualification
  get professionalQualifications() {
    return this.postForm.get('professionalQualifications') as FormArray;
  }

  // Add a new field group to the dynamicFields FormArray other qualification
  addprofessionalQualificationsField() {
    const fieldGroupForPro = this.formBuilder.group({
      qualification: '',
      issuingAuthority: '',
      gradingSystem: 'Grading System',
      grade: '',
      yearOfQualification: '',
      // ScannedCopyOfCourseCompleted: [''],
    });
    this.professionalQualifications.push(fieldGroupForPro);
  }

  // Remove a field group from the dynamicFields FormArray other qualification
  removeprofessionalQualificationsField(index: number) {
    this.professionalQualifications.removeAt(index);
  }

public next(){
  this.step=this.step+1
}
public previous(){
  this.step=this.step-1;
}

  //method for submitting the form value
  public onSubmit() {
    // this.step=this.step + 1;
    console.log(this.postForm.value);
    
    if (this.postForm.valid) {
      let formDetail = {
        namePrefix: this.postForm.value.namePrefix,
        firstName: this.postForm.value.firstName,
        middleName: this.postForm.value.middleName,
        lastName: this.postForm.value.lastName,
        fathersFirstName: this.postForm.value.fathersFirstName,
        fathersMiddleName: this.postForm.value.fathersMiddleName,
        fathersLastName: this.postForm.value.fatherLastName,
        dateOfBirth: this.postForm.value.dateOfBirth,
        age: this.postForm.value.age,
        maritalStatus: this.postForm.value.maritalStatus,
        phoneCode: this.postForm.value.phoneCode,
        personalContactNo: this.postForm.value.personalContactNo,
        email: this.postForm.value.email,
        citizenship: this.postForm.value.citizenship,
        workedInUAE: this.postForm.value.workedInUAE,
        emiratesID: this.postForm.value.EmiratesID,
        // DegreeAttestation: this.postForm.value.DegreeAttestation,
        degreeAttestation: this.postForm.value.DegreeAttestation,
        bloodGroup: this.postForm.value.bloodGroup,
        permanentResidenceCountry: this.postForm.value.permanentResidenceCountry,
        permanentResidentialAddress: this.postForm.value.permanentResidentialAddress,
        hobbies: this.postForm.value.hobbies,

        educations: [{
          // secondary details
          secondaryIssuingAuthority: this.postForm.value.secondaryIssuingAuthority,
          secondarymarksOrGrade: this.postForm.value.secondarymarksOrGrade,
          secondaryyear: this.postForm.value.secondaryyear,

          // senior secondary details
          seniorSecondaryIssuingAuthority: this.postForm.value.seniorSecondaryIssuingAuthority,
          seniorSecondaryMarksOrGrade: this.postForm.value.seniorSecondaryMarksOrGrade,
          seniorSecondaryYear: this.postForm.value.seniorSecondaryYear,


          // graduation details
          graduationIssuingAuthority: this.postForm.value.graduationIssuingAuthority,
          graduationMarksOrGrade: this.postForm.value.graduationMarksOrGrade,
          graduationYear: this.postForm.value.graduationYear,


          // post graduation details
          postGraduationIssuingAuthority: this.postForm.value.postGraduationIssuingAuthority,
          postGraduationMarksOrGrade: this.postForm.value.postGraduationMarksOrGrade,
          postGraduationYear: this.postForm.value.postGraduationYear,




          // diploma details
          diplomaIssuingAuthority: this.postForm.value.diplomaIssuingAuthority,
          diplomaMarksOrGrade: this.postForm.value.diplomaMarksOrGrade,
          diplomaYear: this.postForm.value.diplomaYear,
        }
        ],
        // passport
        psDetail: {
          passportIssuingCountry: this.postForm.value.passportIssuingCountry,
          passportNumber: this.postForm.value.passportNumber,
          passportExpiryDate: this.postForm.value.passportExpiryDate,

        },

        // license

        license: {
          drivinglicense: this.postForm.value.drivinglicense,
          licenseType:this.postForm.value.licenseType,
          ownvehicle: this.postForm.value.ownvehicle,

        },
        relative: {
          // Blood Realative

          relativenamePrefix: this.postForm.value.relativenamePrefix,
          rfirstname: this.postForm.value.RFirstname,
          rmiddlename: this.postForm.value.Rmiddlename,
          rlastname: this.postForm.value.Rlastname,
          relationship: this.postForm.value.relationship,
          rphoneCode: this.postForm.value.RphoneCode,
          rcontactno: this.postForm.value.Rcontactno,
          raddress: this.postForm.value.Raddress,

        },
        visainfo: {
          // Visa Details 
          visaType: this.postForm.value.VisaType,
          workVisaEmirateId: this.postForm.value.workVisaEmirateId,
          categoryOfVisa: this.postForm.value.categoryOfVisa,
          siGlobalWorkVisaCompany: this.postForm.value.siGlobalWorkVisaCompany,
          visaIssueyDate: this.postForm.value.visaIssueyDate,
          visaExpiryDate: this.postForm.value.visaExpiryDate,

        },
        // professionalQualifications: [{
        //   // profesional details
        //   qualification: this.postForm.value.qualification,
        //   issuingAuthority: this.postForm.value.issuingAuthority,
        //   gradingSystem: this.postForm.value.gradingSystem,
        //   grade: this.postForm.value.grade,
        //   yearOfQualification: this.postForm.value.yearOfQualification,

        // }],
        professionalQualifications: this.professionalQualifications.value ,


        oldEmployee: [{

          // previous employers details
          companyName: this.postForm.value.companyName,
          companyAddress: this.postForm.value.companyAddress,
          designation: this.postForm.value.designation,
          dateFrom: this.postForm.value.dateFrom,
          dateTo: this.postForm.value.dateTo,
          description: this.postForm.value.description,
          previousManagerName: this.postForm.value.previousManagerName,
          previousManagerPhoneCode: this.postForm.value.previousManagerPhoneCode,
          previousManagerContact: this.postForm.value.previousManagerContact,
          previousHRName: this.postForm.value.previousHRName,
          previousHRPhoneCode: this.postForm.value.previousHRPhoneCode,
          previousHRContact: this.postForm.value.previousHRContact,
          // achievementsRewards: this.postForm.value.achievementsRewards,
         
         
         
          empAchievements:this.empAchievements.value,
         
         
          lastWithdrawnSalary: this.postForm.value.lastWithdrawnSalary,

        }],
        training: [{
          // // training details
          trainingType: this.postForm.value.trainingType,
          inHouseOutsource: this.postForm.value.inHouseOutsource,
          paidUnpaid: this.postForm.value.paidUnpaid,
          trainingStartDate: this.postForm.value.trainingStartDate,
          trainingEndDate: this.postForm.value.trainingEndDate,
          // // trainers details
          trainerName: this.postForm.value.trainerName,
          trainerPost: this.postForm.value.trainerPost,
          trainerDepartment: this.postForm.value.trainerDepartment,
          trainerPhoneCode: this.postForm.value.trainerPhoneCode,
          trainerPhoneNo: this.postForm.value.trainerPhoneNo,
          trainerFeedback: this.postForm.value.trainerFeedback,
        }],

        bgcheck: {
          // // background check
          status: this.postForm.value.status,
          doneBy: this.postForm.value.doneBy,
          internalConcernedManager: this.postForm.value.internalConcernedManager,
          externalName: this.postForm.value.externalConcernedPerson,
          externalPost: this.postForm.value.externalPost,
          externalCompanyName: this.postForm.value.externalCompanyName,
          externalPhoneCode: this.postForm.value.externalPhoneCode,
          externalPhoneNo: this.postForm.value.externalPhoneNo,
          managerApproval: this.postForm.value.managerApproval,
          managerName: this.postForm.value.managerName,
          remark: this.postForm.value.remark,
          // document verification
          previousDesignationAndResponsibilityVerified: this.postForm.value.previousDesignationAndResponsibilityVerified,
          idProofDocumentVerified: this.postForm.value.idProofDocumentVerified,
          educationalQualificationVerified: this.postForm.value.educationalQualificationVerified,
          previousEmploymentStatusVerified: this.postForm.value.previousEmploymentStatusVerified,
          addressVerified: this.postForm.value.addressVerified,
          // criminal
          criminalRecords: this.postForm.value.criminalRecords,
          punishmentForImprisonmentApproval: this.postForm.value.punishmentForImprisonmentApproval,
        },
        othersQualifications: this.othersQualifications.value ,
        
        jobDetails: [{
          // // jobs details
          jobPostDesignation: this.postForm.value.jobPostDesignation,
          jobdepartment: this.postForm.value.jobdepartment,
          companyEmailIdProvided: this.postForm.value.companyEmailIdProvided,
          companyEmailId: this.postForm.value.companyEmailId,
          jobLevel: this.postForm.value.jobLevel,
          postedLocation: this.postForm.value.postedLocation,
          // // PayScale details
          basicAllowance: this.postForm.value.basicAllowance,
          houseRentAllowance: this.postForm.value.houseRentAllowance,
          houseRentAmount: this.postForm.value.houseRentAmount,
          foodAllowance: this.postForm.value.foodAllowance,
          foodAllowanceAmount: this.postForm.value.foodAllowanceAmount,
          vehicleAllowance: this.postForm.value.vehicleAllowance,
          vehicleAllowanceAmount: this.postForm.value.vehicleAllowanceAmount,
          uniformAllowance: this.postForm.value.uniformAllowance,
          uniformAllowanceAmount: this.postForm.value.uniformAllowanceAmount,
          travellingAllowances: this.postForm.value.travellingAllowances,
          travellingAllowancesAmount: this.postForm.value.travellingAllowancesAmount,
          educationalAllowance: this.postForm.value.educationalAllowance,
          educationalAllowanceAmount: this.postForm.value.educationalAllowanceAmount,
          otherAllowance: this.postForm.value.otherAllowance,
          otherAllowanceAmount: this.postForm.value.otherAllowanceAmount,
          vehicle: this.postForm.value.vehicle,
          vehicleNumber: this.postForm.value.vehicleNumber,
          vehicleModelName: this.postForm.value.vehicleModelName,
          vehicleModelYear: this.postForm.value.vehicleModelYear,
          isVehicleNewOrPreowned: this.postForm.value.isVehicleNewOrPreowned,
          cashOrChipFacility: this.postForm.value.vehicleFuelCashFacility,
          chipNumber: this.postForm.value.vehicleFuelChipFacility,
          // // accommodation
          accommodationYesOrNo: this.postForm.value.accommodationYesOrNo,
          isShredOrSeparate: this.postForm.value.isShredOrSeparate,
          isExeutiveOrLabourFacility: this.postForm.value.isExeutiveOrLabourFacility,
          electricityAllocationYesOrNo: this.postForm.value.electricityAllocationYesOrNo,
          electricityAllocationAmount: this.postForm.value.electricityAllocationAmount,
          rentAllocationYesOrNo: this.postForm.value.rentAllocationYesOrNo,
          rentAllocationAmount: this.postForm.value.rentAllocationAmount,

          mobileIssuedOrNot: this.postForm.value.mobileIssuedOrNot,
          simIssuedOrNot: this.postForm.value.simIssuedOrNot,
          flightFacilities: this.postForm.value.flightFacilities,
          howMuchTime: this.postForm.value.howMuchTime,
          familyTicketsAlsoProvidedOrNot: this.postForm.value.familyTicketsAlsoProvidedOrNot,
          othersAccomandation: this.postForm.value.othersAccomandation,
          // healthInsuranceCoverage
          healthInsuranceCoverage: this.postForm.value.healthInsuranceCoverage,
          maximumAmountGiven: this.postForm.value.maximumAmountGiven,
          familyHealthInsuranceGivenOrNot: this.postForm.value.familyHealthInsuranceGivenOrNot,
          familyHealthInsuranceType: this.postForm.value.familyHealthInsuranceType,
          joiningDate: this.postForm.value.joiningDate,

          punchingMachineYesOrNo: this.postForm.value.punchingMachineYesOrNo,
          referredBy:this.postForm.value.ReferedBy,
          byWhom:this.postForm.value.ReferenceName,
        }]
      }
      const formFileData = new FormData();
      formFileData.append('PersonalInfo', JSON.stringify(formDetail))
      // formFileData.append("education", JSON.stringify(educations))
      // formFileData.append("bgcheck", JSON.stringify(bgcheck))
      // formFileData.append("visainfo", JSON.stringify(visainfo))
      // formFileData.append("relative", JSON.stringify(relative))
      // formFileData.append("license", JSON.stringify(license))
      // formFileData.append("training", JSON.stringify(training))
      // formFileData.append("oldEmployee", JSON.stringify(oldEmployee))
      // formFileData.append("professionalQualifications", JSON.stringify(professionalQualifications));
      // formFileData.append("formDetail", JSON.stringify(formDetail));
      formFileData.append('passportSizePhoto', this.postForm.value.passportSizePhoto);
      formFileData.append("passportScan", this.postForm.value.passportScannedCopy);
      formFileData.append("OtherIdProofDoc", this.postForm.value.otherScannedIdProof);
      formFileData.append("licensecopy", this.postForm.value.scannedCopyOfLincense);
      formFileData.append("raddressproof", this.postForm.value.ScannedCopyOfRealtiveAddress)
      formFileData.append("relativeid", this.postForm.value.ScannedCopyOfRealtiveId)
      formFileData.append("visaDocs", this.postForm.value.VisaScannedCopyOfID)

      formFileData.append("secondaryDocumentScan", this.postForm.value.ScannedCopyOfSecondary)
      formFileData.append("seniorSecondaryDocumentScan", this.postForm.value.ScannedCopyOfSeniorSecondary)
      formFileData.append("graduationDocumentScan", this.postForm.value.ScannedCopyOfGraduation)
      formFileData.append("postGraduationDocumentScan", this.postForm.value.ScannedCopyOfPostGraduation)
      formFileData.append("diplomaDocumentScan", this.postForm.value.ScannedCopyOfDiploma)
      this.array.forEach((element:any)=> { if(element !==undefined){
        formFileData.append('othersDocumentScan',element)
      }  })

    
      // const formFileData_2=new FormData();
      // formFileData.append('scannedCopyOfOther',this.postForm.value.otherQualifications)
      this.professionalArray.forEach((e:any)=>{if (e !==undefined){
        formFileData.append('degreeScan',e)
      }})
      // formFileData.append("degreeScan", this.postForm.value.ScannedCopyOfCourseCompleted)
      this.achivementArray.forEach((e:any)=>{if(e!==undefined){
        formFileData.append('achievementsRewardsDocs',e)
      }})
      formFileData.append("achievementsRewardsDocs", this.postForm.value.ScanCopyOfAchivements)
      formFileData.append("payslipScan", this.postForm.value.SalaryScannedCopy)
      formFileData.append("recordsheet", this.postForm.value.RecordSheet)
      formFileData.append("declarationRequired", this.postForm.value.Declaration)
      formFileData.append("CertificateUploadedForOutsource", this.postForm.value.CertificateUploadedForOutsource)
      formFileData.append("PaidTrainingDocumentProof", this.postForm.value.PaidTrainingDocumentProof)
      this.apiService.addPost(formFileData).subscribe((successResponse: any) => {
        console.log("successfully")
      }, (errorResponse: any) => {
        console.log(errorResponse)
      })
    }
  }
}


