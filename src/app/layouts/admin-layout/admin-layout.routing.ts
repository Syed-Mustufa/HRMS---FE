import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/admin-pages/dashboard/dashboard.component";
import { AdminProfileComponent } from "../../pages/admin-pages/admin-profile/admin-profile.component";

import { HumanResourcesManagementComponent } from "../../pages/admin-pages/human-resources-management/human-resources-management.component";
import { WarehouseManagementComponent } from "../../pages/admin-pages/warehouse-management/warehouse-management.component";
import { InventoryManagementComponent } from "../../pages/admin-pages/inventory-management/inventory-management.component";
import { OrderManagementComponent } from "../../pages/admin-pages/order-management/order-management.component";
import { SupplyChainManagementComponent } from "../../pages/admin-pages/supply-chain-management/supply-chain-management.component";
import { AuthguardGuard } from "src/app/auth/authguard.guard";
import { TimeAttendanceComponent } from "src/app/pages/employee-pages/time-attendance/time-attendance.component";
import { PersonalComponent } from "src/app/pages/employee-pages/personal/personal.component";
import { AdminGuard } from "src/app/auth/admin.guard";
import { NewEmployeeComponent } from "src/app/pages/admin-pages/human-resources-management/new-employee/new-employee.component";
import { EmployeeDetailsComponent } from "src/app/pages/admin-pages/employee-details/employee-details/employee-details.component";
import { AllEmployeesComponent } from "src/app/pages/admin-pages/employee-details/all-employees/all-employees.component";
import { UpdateEmployeeComponent } from "src/app/pages/admin-pages/employee-details/update-employee/update-employee.component";
import { HeadOfWarehouseManagerComponent } from "src/app/pages/manager-pages/head-of-warehouse-manager/head-of-warehouse-manager.component";
import { Warehouse1Component } from "src/app/pages/manager-pages/warehouse1/warehouse1/warehouse1.component";
import { Warehouse3Component } from "src/app/pages/manager-pages/warehouse3/warehouse3/warehouse3.component";
import { Warehouse2Component } from "src/app/pages/manager-pages/warehouse2/warehouse2/warehouse2.component";
import { UpdateProductComponent } from "src/app/pages/manager-pages/update-product/update-product.component";
import { AddProductComponent } from "src/app/pages/manager-pages/add-product/add-product.component";
import { FormToFillComponent } from "src/app/pages/employee-pages/form-to-fill/form-to-fill.component";
import { LeaveFormComponent } from "src/app/pages/employee-pages/form-to-fill/leave-form/leave-form.component";
import { ApprovalleaveformComponent } from "src/app/pages/manager-pages/approval-leave-form/approvalleaveform/approvalleaveform.component";
import { NotificationComponent } from "src/app/pages/admin-pages/notification/notification/notification.component";
import { LeaveDetailsEmployeeComponent } from "src/app/pages/admin-pages/employee-leave-Details/leave-details-employee/leave-details-employee.component";
import { AllNotificationComponent } from "src/app/pages/admin-pages/all-notification/all-notification.component";
import { AllRequestComponent } from "src/app/pages/admin-pages/employee-leave-Details/leave-all-request/all-request/all-request.component";
import { AcceptedRequestComponent } from "src/app/pages/admin-pages/employee-leave-Details/leave-accepted-request/accepted-request/accepted-request.component";
import { RejectedRequestComponent } from "src/app/pages/admin-pages/employee-leave-Details/leave-reject-request/rejected-request/rejected-request.component";

export const AdminLayoutRoutes: Routes = [
  // ADMIN PAGES
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthguardGuard, AdminGuard],
  },
  {
    path: "human-resources-management",
    component: HumanResourcesManagementComponent,
    canActivate: [AuthguardGuard],
    children: [
      {
        path: "new-employee",
        component: NewEmployeeComponent,
        canActivate: [AuthguardGuard],
      },
    ],
  },
  {
    path: "warehouse-management",
    component: WarehouseManagementComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "inventory-management",
    component: HeadOfWarehouseManagerComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "order-management",
    component: OrderManagementComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "supply-chain-management",
    component: SupplyChainManagementComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "admin-profile",
    component: AdminProfileComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "all-employees",
    component: AllEmployeesComponent,
    canActivate: [AuthguardGuard, AdminGuard],
  },
  {
    path: "employee-details/:id",
    component: EmployeeDetailsComponent,
    canActivate: [AuthguardGuard, AdminGuard],
  },
  {
    path: "update-employee/:email",
    component: UpdateEmployeeComponent,
    canActivate: [AuthguardGuard, AdminGuard],
  },
  {
    path: "notifications",
    component: NotificationComponent,
    canActivate: [AuthguardGuard, AdminGuard],
  },
  {
    path:"all-notifications",
    component: AllNotificationComponent
  },
  {
    path:"all-notifications-for-leave",
    component:AllRequestComponent,
  },
  {
    path:'leave-accepted-request',
    component:AcceptedRequestComponent
  },
  {
    path:"leave-rejected-request",
    component:RejectedRequestComponent
  },
  {
    path: "employee-leave-details/:id",
    component: LeaveDetailsEmployeeComponent,
  },
  {
    path: "approval-leave-form/:id",
    component: ApprovalleaveformComponent,
  },
  // EMPLOYEE PAGES
  {
    path: "personal",
    component: PersonalComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "form-to-fill",
    component: FormToFillComponent,
    children: [
      {
        path: "leaveform",
        component: LeaveFormComponent,
      },
    ],
  },
  {
    path: "time-off",
    component: TimeAttendanceComponent,
    canActivate: [AuthguardGuard],
  },
  // Manager
  {
    path: "headOfManager",
    component: HeadOfWarehouseManagerComponent,
  },
  {
    path: "warehouse1",
    component: Warehouse1Component,
  },
  {
    path: "warehouse2",
    component: Warehouse2Component,
  },
  {
    path: "warehouse3",
    component: Warehouse3Component,
  },
  {
    path: "update-product",
    component: UpdateProductComponent,
  },
  {
    path: "add-product",
    component: AddProductComponent,
  },
  {
    path: "leave-update/:id",
    component: ApprovalleaveformComponent,
  },
];
