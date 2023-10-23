import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServicesService } from "src/app/services/services.service";
import jwtDecode from "jwt-decode";

export class User {
  constructor(
    public username: string,
    public password: string,
    public remember: boolean,
    public role: string
  ) {}
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private loginServices: ServicesService, private router: Router) {}

  ngOnInit() {}
  ngOnDestroy() {}

  public user: any = new User("", "", false, "ROLE_ADMIN");
  public usernameError: string = "";
  public passError: string = "";
  public message: string = "";
  public status: number = 0;
  public buttonActive: boolean[] = [true, false, false];
  public isPassHide = true;
  public passType = "password";

  public passHideShow() {
    this.isPassHide = !this.isPassHide;

    if (this.isPassHide) this.passType = "password";
    else this.passType = "text";
  }

  public roleProvider(role: string) {
    // adding role
    this.user.role = role;

    // Role Selection
    switch (role) {
      // ----- disabled role buttons except admin button
      case "ROLE_ADMIN":
        this.buttonActive[0] = true;
        this.buttonActive[1] = false;
        this.buttonActive[2] = false;
        break;

      // ----- disabled role buttons except employee button
      case "ROLE_EMPLOYEE":
        this.buttonActive[0] = false;
        this.buttonActive[1] = true;
        this.buttonActive[2] = false;
        break;

      // ----- disabled role buttons except manager button
      case "ROLE_MANAGER":
        this.buttonActive[0] = false;
        this.buttonActive[1] = false;
        this.buttonActive[2] = true;
        break;
    }
  }

  // LOGIN FORM SUBMIT IF VALIDATE
  public onSubmit(form: NgForm) {
    this.user.username = form.value.username;
    this.user.password = form.value.password;
    this.user.remember = form.value.remember;

    // call login function (passing user object)
    this.loginServices.login(this.user).subscribe((result: any) => {
      this.status = result.status;
      // console.log(result);
      // console.log(result.token);

      // console.log(result.info);

      if (result.token) {
        var decoded = jwtDecode(result.token);
        // console.log("********************************************");
        // console.log("JWT  DECODED !");
        console.log(decoded);
        // console.log("********************************************");
        localStorage.setItem("token", result.token);
        this.message = "successfully loggedIn!";
        this.loginServices.setRole(this.user.role);
        setTimeout(() => {
          if (
            this.loginServices.getRole() == "ROLE_ADMIN" 
            // ||
            // this.loginServices.getRole() == "ROLE_MANAGER"
          )
            this.router.navigate(["/dashboard"]);
          else if (this.loginServices.getRole() == "ROLE_EMPLOYEE")
            this.router.navigate(["/personal"]);
          else if (this.loginServices.getRole() == "ROLE_MANAGER")
          this.router.navigate(["/headOfManager"]);
        }, 1000);
      } else this.message = "Invalid email or password!";
    });
  }
}
