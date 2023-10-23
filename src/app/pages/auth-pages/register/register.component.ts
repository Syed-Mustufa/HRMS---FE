import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServicesService } from "src/app/services/services.service";

export class NewUser {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public agree: boolean
  ) {}
}
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: ServicesService,
    private router: Router
  ) {}

  ngOnInit() {}

  public newUser: NewUser = new NewUser("", "", "", false);
  public usernameError: string = "";
  public emailError: string = "";
  public passError: string = "";
  public message: string = "";
  public status: number = 0;

  public onSubmit(form: NgForm) {
    let email: string = this.newUser.email;
    let username: string = this.newUser.username;
    let pass: string = this.newUser.password;

    // EMAIL VALIDATION ============
    let email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let flag = email_pattern.test(email);
    if (email === "") this.emailError = "email is required!";
    else if (!flag) this.emailError = "Email is not valid";
    else this.emailError = "";

    // PASSWORD VALIDATION ==========
    if (pass == "") this.passError = "password is required!";
    else if (pass.length < 5 && pass.length !== 0)
      this.passError = "password must be atleast 5 characters";
    else this.passError = "";

    console.log(username.length);
    // FIRST NAME VALIDATION ===========
    let usernamePattern = /^[0-9]+$/;
    let usernameFlag = usernamePattern.test(username);

    if (username == "") this.usernameError = "username is required!";
    else if (!usernameFlag && username !== "") {
      this.usernameError = "Employee ID field must only contain numbers";
    } else if (username.length < 3)
      this.usernameError = "Employee ID must be atleast 3 characters";
    else this.usernameError = "";

    // IF BOTH FIELDS ARE VALIDATED!
    if (!this.passError && !this.emailError && !this.usernameError)
      this.registerService.register(this.newUser).subscribe((result: any) => {
        console.log(result);

        this.status = result.status;

        if (result.status) {
          this.message = "account created!";
          setTimeout(() => {
            this.router.navigate(["/login"]);
          }, 1000);
        } else {
          this.message = "email already registered!";
          // setTimeout(()=>{
          //   this.message = ''
          // },1000)
        }
      });
  }
}
