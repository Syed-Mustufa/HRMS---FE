import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { TimeAttendanceComponent } from "./pages/employee-pages/time-attendance/time-attendance.component";
import { PersonalComponent } from "./pages/employee-pages/personal/personal.component";
import { ForgotPasswordComponent } from "./pages/auth-pages/forgot-password/forgot-password.component";
import { OnlyNumbersDirective } from "./directives/only-numbers.directive";
import { EmployeeDetailsComponent } from "./pages/admin-pages/employee-details/employee-details/employee-details.component";
import { AllEmployeesComponent } from "./pages/admin-pages/employee-details/all-employees/all-employees.component";
import { UpdateEmployeeComponent } from "./pages/admin-pages/employee-details/update-employee/update-employee.component";
import { HeadOfWarehouseManagerComponent } from './pages/manager-pages/head-of-warehouse-manager/head-of-warehouse-manager.component';
import { Warehouse1Component } from './pages/manager-pages/warehouse1/warehouse1/warehouse1.component';
import { Warehouse2Component } from './pages/manager-pages/warehouse2/warehouse2/warehouse2.component';
import { Warehouse3Component } from './pages/manager-pages/warehouse3/warehouse3/warehouse3.component';
import { UpdateProductComponent } from './pages/manager-pages/update-product/update-product.component';
import { AddProductComponent } from './pages/manager-pages/add-product/add-product.component';
// import { LeaveFormComponent } from './pages/employee-pages/leave-form/leave-form.component';
import { FormToFillComponent } from './pages/employee-pages/form-to-fill/form-to-fill.component';
import { ApprovalleaveformComponent } from './pages/manager-pages/approval-leave-form/approvalleaveform/approvalleaveform.component';
import { NotificationComponent } from './pages/admin-pages/notification/notification/notification.component';
import { LeaveDetailsEmployeeComponent } from './pages/admin-pages/employee-leave-Details/leave-details-employee/leave-details-employee.component';
import { AllNotificationComponent } from './pages/admin-pages/all-notification/all-notification.component';
import { RejectedRequestComponent } from './pages/admin-pages/employee-leave-Details/leave-reject-request/rejected-request/rejected-request.component';
import { AcceptedRequestComponent } from './pages/admin-pages/employee-leave-Details/leave-accepted-request/accepted-request/accepted-request.component';
import { AllRequestComponent } from './pages/admin-pages/employee-leave-Details/leave-all-request/all-request/all-request.component';
// import {  UpdateLeaveFormComponent } from './pages/admin-pages/employee-leave-Details/update-Leave-form/upadte-leave-form/upadte-leave-form.component';
// import { LeaveFormComponent } from './pages/employee-pages/form-to-fill/leave-form/leave-form.component';
// import { LeaveFormComponent } from './pages/employee-pages/leave-form/leave-form/leave-form.component';
// import { LeaveFormComponent } from "./pages/employee-pages/form-to-fill/leave-form/leave-form.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    TimeAttendanceComponent,
    PersonalComponent,
    ForgotPasswordComponent,
    OnlyNumbersDirective,
    EmployeeDetailsComponent,
    AllEmployeesComponent,
    UpdateEmployeeComponent,
    HeadOfWarehouseManagerComponent,
    Warehouse1Component,
    Warehouse2Component,
    Warehouse3Component,
    UpdateProductComponent,
    AddProductComponent,
    FormToFillComponent,
    ApprovalleaveformComponent,
    NotificationComponent,
    LeaveDetailsEmployeeComponent,
    AllNotificationComponent,
    RejectedRequestComponent,
    AcceptedRequestComponent,
    AllRequestComponent,
    

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
