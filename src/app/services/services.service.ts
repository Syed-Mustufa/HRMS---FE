import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  public url = environment.hostUrlNgrock; // main url
  public role: string;

  constructor(private http: HttpClient, private router: Router) {}

  // ================== AUTH_PAGES SERVICES ==================

  // FOR REGISTER
  public register(data: any) {
    data = {
      ...data,
      role: ["employee"],
    };
    console.log(data);
    return this.http.post(
      environment.hostUrlNgrock + "/api/auth/v1/signup",
      data
    );
  }

  // FOR LOGIN
  public login(data: any) {
    // console.log(dtaa)
    console.log(data);
    // return this.http.post(this.url + "signin", data);
    return this.http.post(
      environment.hostUrlNgrock +"/api/auth/v1/signin",
      data
    );
  }

  // FOR LOGOUT
  public logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    this.router.navigate(["/login"]);
  }

  // ------------- FORGOT PASSWORD 3 STEP PROCESS SERVICES ------------------

  // FOR FORGOT PASSWORD
  public forgot_password(data: any) {
    // return this.http.post(this.url + "send-otp", data);
    return this.http.post(environment.hostUrlNgrock + "/api/v1/send-otp", data);
  }

  // FOR OTP VERIFICATION
  public otp_verification(data: any) {
    return this.http.post(
      environment.hostUrlNgrock + "/api/v1/verifyotp",
      data
    );
  }

  // FOR CHANGE PASSWORD
  public new_pass_set(data: any) {
    return this.http.put(
      environment.hostUrlNgrock + "/api/v1/new-password",
      data
    );
  }

  // ---------- TOKEN AND ROLE SET AND GET SERVICES --------------------

  // CHECK TOKEN IN LOCALSTORAGE (set or not)
  public tokenChecker() {
    return !!localStorage.getItem("token"); // return true or false
  }

  // GET TOKEN IF SET
  public getToken() {
    return localStorage.getItem("token");
  }

  // GET ROLE OF USER
  public getRole() {
    if (!!localStorage.getItem("role")) {
      return localStorage.getItem("role");
    }
    return this.role;
  }

  // SET ROLE OF USER
  public setRole(role: string) {
    this.role = role;
    localStorage.setItem("role", role);
  }

  // ----------------------------------------------------------
  // ================== ADMIN_PAGES SERVICES ==================

  // not implemented
  public dashboard() {
    // console.log("dashboard services");
    // return this.http.get(environment.hostUrl + "dashboard");
    return this.http.get(environment.hostUrlNgrock + "/api/v1/dashboard", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // ONBOARDING NEW EMPOYEE
  public addPost(formData: any) {
    // return this.http.post(this.url + "/personal-info", formData);
    return this.http.post(
      environment.hostUrlNgrock + "/api/v1/personal-info",
      formData
    );
  }
  // ONBOARDING Updating NEW EMPOYEE
  public updatePost(formData: any,email:string) {
    return this.http.put(
      environment.hostUrlNgrock + `/api/v1/personal-info/update/email/${email}`,
      formData
    );
  }

  // ONBOARDING GET ALL EMPLOYEES
  public getAllEmployees() {
    return this.http.get(
      environment.hostUrlNgrock + "/api/v1/personal-info/find/all/active"
    );
  }
  // ONBOARDING GET EMPLOYEE BY EMAIL
  public searchEmployeeByEmail(email: any) {
    return this.http.get(
      `${environment.hostUrlNgrock}/api/v1/personal-info/email/${email}`
    );
  }
  // ONBOARDING GET EMPLOYEE BY ID
  public searchEmployeeById(ID: any) {
    return this.http.get(
      `${environment.hostUrlNgrock}/api/v1/personal-info/employeeId/${ID}`
    );
  }

  // ONBOARDING DELETE EMPLOYEE
  public deleteEmployee(email: string, FormData) {
    return this.http.put(
      `${environment.hostUrlNgrock}/api/v1/personal-info/delete/${email}`,
      FormData
    );
  }

  // ONBOARDING EMPLOYEE REJOIN //! not meant to be implemented
  // public rejoinEmployee(email: string) {
  //   return this.http.put(
  //     `${environment.hostUrlNgrock}/api/v1/personal-info/rejoin/${email}`,
  //     {}
  //   );
  // }

  // ----------------------------------------------------------
  // ================== EMPLOYEE_PAGES SERVICES ==================

  // FOR TIME AND ATTENDANCE (not implemeenvironment./ FOR TIME AND ATTENDANCE (not implemented)
  public punchIn(data:any) {
    // let empId = 1001;
    // punch-In-Time
    return this.http.post(`${this.url}/punch-In-Time`,data);
  }
  public punchOut(data:any) {
    // let empId = 1001;
    // punch-In-Time
    return this.http.post(`${this.url}/punch-out`,data);
  }
  public breakStart(data:any) {
    // let empId = 1001;
    // punch-In-Time
    return this.http.post(`${this.url}/break-start`,data);
  }
  public breakEnd(data:any) {
    // let empId = 1001;
    // punch-In-Time
    return this.http.post(`${this.url}/break-end`,data);
  }

  // ========== NOT IMPLEMENTED YET =============
  // method for getting personal info
  public personalInfo(userId:any) {
    // empId :number
    // let empId = 1002;
    return this.http.get(`${this.url}/api/v1/personal-info/employeeId/${userId}`);
  }

  //method for posting leave form
  public leaveformPost(leaveData:any) {
    return this.http.post(this.url + "/api/v1/leave/request", leaveData);
  }


  //method for getting All Leave forms

  public getAllLeave(){
    return this.http.get(this.url + "/api/v1/findAll/leaverequest")
  }
  public getAllLeave_for_pending(){
    return this.http.get(this.url + "/api/v1/leave/request/findall/pending")
  }
  public getAllLeave_for_rejected(){
    return this.http.get(this.url + "/api/v1/leave/request/findall/rejected")
  }
  public getAllLeave_for_accepted(){
    return this.http.get(this.url + "/api/v1/leave/request/findall/accepted")
  }


    // Leaving Form Detail GET EMPLOYEE BY ID
    public searchLeaveFormDetailsByemp_Id(ID: any) {
      return this.http.get(
        `${this.url}/api/v1/findall/leave/request/with/employeeId/${ID}`
      );
    }
    // Get Details of Leave Form By Leave Form Id
    public getLeaveFormDetailsByleaveForm_id(ID: any) {
      return this.http.get(
        `${this.url}/api/v1/leave/request/${ID}`
      );
    }


  // update the Leave form 
  public updateLeaveForm(leaveRequestId:any,formData:any){
    console.log(leaveRequestId)
    return this.http.put(
      `${this.url}/api/v1/leave/request/approvedByManager/${leaveRequestId}`
      ,formData)
  }






}
