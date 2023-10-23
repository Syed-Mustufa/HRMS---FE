import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { flatMap } from "rxjs";
import { ServicesService } from "src/app/services/services.service";

declare interface RouteInfo {
  id: number;
  isModuleOpen: boolean;
  path: string;
  title: string;
  icon: string;
  color: string;
  class: string;
  child: any[];
}

export let AdminRoutes: RouteInfo[] = [
  {
    id: 1,
    isModuleOpen: false,
    path: "/dashboard",
    title: "Dashboard",
    icon: "fa-solid fa-house",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 2,
    isModuleOpen: false,
    path: "/human-resources-management",
    title: "Human Resources Management",
    icon: "fa-solid fa-people-group",
    color: "#3883B8",
    class: "",
    child: [
      { name: "Onboarding", path: "/human-resources-management/new-employee" },
      // { name: "Onboarding", path: "/human-resources-management/new-employee" },
      { name: "Attendance Management", path: "" },
      { name: "Performance Management", path: "" },
      { name: "Payroll Processing", path: "" },
      { name: "Leave Management", path: "" },
    ],
  },
  {
    id: 3,
    isModuleOpen: false,
    path: "/warehouse-management",
    title: "Warehouse Management",
    icon: "fa-solid fa-warehouse",
    color: "#3883B8",
    class: "",
    child: [
      { name: "module-1", path: "" },
      { name: "module-2", path: "" },
      { name: "module-3", path: "" },
      { name: "module-4", path: "" },
      { name: "module-5", path: "" },
    ],
  },
  {
    id: 4,
    isModuleOpen: false,
    path: "/inventory-management",
    title: "Inventory Management",
    icon: "fa-solid fa-people-carry-box",
    color: "#3883B8",
    class: "",
    child: [
      { name: "module-1", path: "" },
      { name: "module-2", path: "" },
      { name: "module-3", path: "" },
      { name: "module-4", path: "" },
      { name: "module-5", path: "" },
    ],
  },
  {
    id: 5,
    isModuleOpen: false,
    path: "/order-management",
    title: "Order Management",
    icon: "fa-solid fa-hand-holding-heart",
    color: "#3883B8",
    class: "",
    child: [
      { name: "module-1", path: "" },
      { name: "module-2", path: "" },
      { name: "module-3", path: "" },
      { name: "module-4", path: "" },
      { name: "module-5", path: "" },
    ],
  },
  {
    id: 6,
    isModuleOpen: false,
    path: "/supply-chain-management",
    title: "Supply Chain Management",
    icon: "fa-solid fa-truck",
    color: "#3883B8",
    class: "",
    child: [
      { name: "module-1", path: "" },
      { name: "module-2", path: "" },
      { name: "module-3", path: "" },
      { name: "module-4", path: "" },
      { name: "module-5", path: "" },
    ],
  },
  {
    id: 7,
    isModuleOpen: false,
    path: "/all-employees",
    title: "All Employees",
    icon: "ni-single-02 text-yellow",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 8,
    isModuleOpen: false,
    path: "/all-notifications",
    title: "All Notification",
    icon: "ni-single-02 text-green",
    color: "#3883B8",
    class: "",
    child: [],
  },
  
  {
    id: 9,
    isModuleOpen: false,
    path: "/dashboard",
    title: "Settings",
    icon: "ni-key-25 text-info",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 10,
    isModuleOpen: false,
    path: "/admin-profile",
    title: "Admin profile",
    icon: "ni-single-02 text-yellow",
    color: "#3883B8",
    class: "",
    child: [],
  },
  
  {
    id: 11,
    isModuleOpen: false,
    path: "/dashboard",
    title: "Logout",
    icon: "ni-circle-08 text-pink",
    color: "#3883B8",
    class: "",
    child: [],
  },
];

export let EmployeeRoutes: RouteInfo[] = [
  {
    id: 1,
    isModuleOpen: false,
    path: "/personal",
    title: "Personal",
    icon: "fa-solid fa-house",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 2,
    // isModuleOpen: false,
    // path: "/human-resources-management",
    // title: "Pay Info",
    // icon: "fa-solid fa-receipt",
    // color: "#3883B8",
    // class: "",
    // child: [],

    isModuleOpen: false,
    path: "/form-to-fill",
    title: "Forms to Fill",
    icon: "fa-brands fa-wpforms",
    color: "#3883B8",
    class: "",
    child: [
      { name: "Leave Form", path: "/form-to-fill/leaveform" },
      { name: "Complaint Form", path: "" },
      { name: "Feedback Form", path: "" },
      { name: "Extra Benefit Request Form", path: "" },
      { name: "Special Request Form", path: "" },
      { name: "Appraisal Form", path: "" },
      { name: "Shift Request/Swapping Request Form", path: "" },
    ],
  },
  {
    id: 3,
    isModuleOpen: false,
    path: "/time-off",
    title: "Time Off",
    icon: "fa-solid fa-calendar-days",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 4,
    isModuleOpen: false,
    path: "/inventory-management",
    title: "Approval Details",
    icon: "fa-solid fa-person-circle-check",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 5,
    isModuleOpen: false,
    path: "/order-management",
    title: "Attendance Policies",
    icon: "fa-solid fa-check-to-slot",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 6,
    isModuleOpen: false,
    path: "/human-resources-management",
    title: "Pay Info",
    icon: "fa-solid fa-receipt",
    color: "#3883B8",
    class: "",
    child: [],
    // isModuleOpen: false,
    // path: "/form-to-fill",
    // title: "Forms to Fill",
    // icon: "fa-brands fa-wpforms",
    // color: "#3883B8",
    // class: "",
    // child: [
    //   { name: "Leave Form", path: "/form-to-fill/leaveform" },
    //   { name: "Complaint Form", path: "" },
    //   { name: "Feedback Form", path: "" },
    //   { name: "Extra Benefit Request Form", path: "" },
    //   { name: "Special Request Form", path: "" },
    //   { name: "Appraisal Form", path: "" },
    //   { name: "Shift Request/Swapping Request Form", path: "" },
    // ],
  },
  {
    id: 7,
    isModuleOpen: false,
    path: "/supply-chain-management",
    title: "supply chain",
    icon: "fa-solid fa-truck",
    color: "#3883B8",
    class: "",
    child: [],
  },

  {
    id: 8,
    isModuleOpen: false,
    path: "/user-profile",
    title: "Appraisal Form",
    icon: "ni-single-02 text-yellow",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 9,
    isModuleOpen: false,
    path: "/dashboard",
    title: "",
    icon: "ni-key-25 text-info",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 10,
    isModuleOpen: false,
    path: "/dashboard",
    title: "",
    icon: "ni-key-25 text-info",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 11,
    isModuleOpen: false,
    path: "/dashboard",
    title: "",
    icon: "ni-key-25 text-info",
    color: "#3883B8",
    class: "",
    child: [],
  },
];



export let ManagerRoutes: RouteInfo[] = [
  {
    id: 1,
    isModuleOpen: false,
    path: "/headOfManager",
    title: "Dashboard Of Warehouse",
    icon: "fa-solid fa-house",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 2,
    isModuleOpen: false,
    path: "/warehouse1",
    title: " Warehouse 1",
    icon: "fa-solid fa-house",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 3,
    isModuleOpen: false,
    path: "/warehouse2",
    title: " Warehouse 2",
    icon: "fa-solid fa-house",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 4,
    isModuleOpen: false,
    path: "/warehouse3",
    title: " Warehouse 3",
    icon: "fa-solid fa-house",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 5,
    isModuleOpen: false,
    path: "/headOfManager",
    title: "",
    icon: "",
    color: "#3883B8",
    class: "",
    child: [],
  },
  // icon: "fa-solid fa-house",
  {
    id: 6,
    isModuleOpen: false,
    path: "/headOfManager",
    title: "",
    icon: "",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 7,
    isModuleOpen: false,
    path: "/headOfManager",
    title: "",
    icon: "",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 8,
    isModuleOpen: false,
    path: "/admin-profile",
    title: "Admin profile",
    icon: "ni-single-02 text-yellow",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 9,
    isModuleOpen: false,
    path: "/headOfManager",
    title: "Settings",
    icon: "ni-key-25 text-info",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 10,
    isModuleOpen: false,
    path: "/headOfManager"  ,
    title: "Logout",
    icon: "ni-circle-08 text-pink",
    color: "#3883B8",
    class: "",
    child: [],
  },
  {
    id: 11,
    isModuleOpen: false,
    path: "/headOfManager"  ,
    title: "Logout",
    icon: "ni-circle-08 text-pink",
    color: "#3883B8",
    class: "",
    child: [],
  }
]



export let ROUTES: RouteInfo[];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  public isModule: boolean = false;

  constructor(private router: Router, public _authService: ServicesService) {}

  // ngOnInit() {
  //   ROUTES =
  //     this._authService.getRole() === "ROLE_ADMIN"
  //       ? AdminRoutes
  //       : EmployeeRoutes
  //       ManagerRoutes;
  //   this.menuItems = ROUTES.filter((menuItem) => menuItem);
  //   this.router.events.subscribe((event) => {
  //     this.isCollapsed = true;
  //   });
  // }

  ngOnInit() {
    ROUTES =
      this._authService.getRole() === "ROLE_ADMIN"
        ? AdminRoutes
        : this._authService.getRole() === "ROLE_EMPLOYEE"
        ? EmployeeRoutes
        : ManagerRoutes;
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
  

  public moduleOpen(id) {
    ROUTES = ROUTES.map((mainModule) => {
      if (mainModule.id == id)
        mainModule.isModuleOpen = !mainModule.isModuleOpen;
      return mainModule;
    });
  }
}
