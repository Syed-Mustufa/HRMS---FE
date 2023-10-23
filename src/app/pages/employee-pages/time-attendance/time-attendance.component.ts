import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ServicesService } from 'src/app/services/services.service';
import * as moment from 'moment';
import 'moment-timezone';


@Component({
  selector: 'app-time-attendance',
  templateUrl: './time-attendance.component.html',
  styleUrls: ['./time-attendance.component.scss']
})
export class TimeAttendanceComponent implements OnInit {
  punchInTimeIST: moment.Moment;
  currentLocalTime: moment.Moment;
  timeDifference: number;
public userId:any;
  constructor(private services : ServicesService) {
    //convert the stamp to loacl time 
    // const punchInTimeUtc = moment('2023-10-18T04:32:07.743+00:00');
    // const punchInTimeIST = punchInTimeUtc.tz('Asia/Kolkata');
    // this.punchInTimeIST = punchInTimeIST.format('HH:mm:ss');
    // console.log(this.punchInTimeIST)

    //convert the local time and difference the current time and the time stamp converted time
    const punchInTimeUtc = moment('2023-10-17T03:38:26.095+00:00');
    this.punchInTimeIST = punchInTimeUtc.tz('Asia/Kolkata');

    this.currentLocalTime = moment();

    this.timeDifference = this.currentLocalTime.diff(this.punchInTimeIST, 'milliseconds');
    console.log(this.timeDifference)
  
  }

  ngOnInit(): void {
    
    const token = this.services.getToken();
    const decodedToken: any = jwtDecode(token);
      this.userId = decodedToken.sub; 
      console.log(this.userId) // Assuming 'id' is the property in the decoded token
    // this.services.timeAttendance().subscribe( (result : any) => {
    //   console.log(result);
    // })
    // this.calculateDifference()
    
  }

  public months : string[] = [ 'Month',
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ]
  public years : string[] = [ 'Year',
    '2019','2020','2021','2022','2023'
  ]
  
  public findDate(dayType){
    let currDate : Date = new Date()
    let resultDate : String;

    switch(dayType){
      case 'yesterday':
        resultDate = currDate.getFullYear() + '-0' + (currDate.getMonth() + 1) + '-' + (currDate.getDate() - 1);
        return resultDate
      
      case 'today':
        resultDate = currDate.getDate() + ' ' + this.months[currDate.getMonth() + 1] + ' ' + currDate.getFullYear();
        return resultDate

    }
  }
  public puncInDate:any;
  public punchType : string = "In"
  public workTime_hours : number = 0
  public workTime_minutes : number = 0
  public workTime_seconds : number = 0
  public workTime : string = "00:00 hrs"
  public punchInTime: Date | null = null;
  public diffMinutes:any = "00 ";
  public diffSeconds:any = "00";
  public diffHours:any = "00";
  public attandance_response_data:any={
    "attendenceId": 3,
    "date": "2023-10-18",
    "day": "WEDNESDAY",
    "punchInTime": "2023-10-20T08:17:37.828+00:00",
    "punchOutTime": null,
    "workingHours": 0,
    "halfDay": false,
    "overTime": 0,
    "employeeId": 2,
    "breaks": null
}



  // public employeeId:any
  public puchIn(): void {
    if(this.punchType=='In'){
      this.punchInTime = new Date();
    console.log('Punched in at:', this.punchInTime);
    const year = this.punchInTime.getFullYear();
    const month = (this.punchInTime.getMonth() + 1).toString().padStart(2, '0'); // January is 0
    const day = this.punchInTime.getDate().toString().padStart(2, '0');
    console.log()
    this.puncInDate=`${year}-${month}-${day}`
    console.log(this.puncInDate)
    let formData:any={
      date:this.puncInDate, 
      employeeId:+this.userId

    }
    this.services.punchIn(formData).subscribe((data)=>{
      console.log("successully post data")
      console.log(data)
      this.attandance_response_data=data
      console.log(this.attandance_response_data)
      this.punchType="Out"
    })

    }else{
      let datasend:any={id:this.attandance_response_data.attendenceId

      }
          this.services.punchOut(datasend).subscribe((data)=>{
            console.log(data)
            this.punchType="In"
          })


    }
    

  }

  public breakStart(){
let datasend:any={id:this.attandance_response_data.attendenceId

}
    this.services.breakStart(datasend).subscribe((data)=>{
      console.log(data)
    })
    // console.log("click me ")
    // this.service.breakStart().subscribe((data)=>{

    // })
  }
  breakEnd(){
    let datasend:any={id:this.attandance_response_data.attendenceId

    }
        this.services.breakEnd(datasend).subscribe((data)=>{
          console.log(data)
        })

  }
  calculateDifference(): void {
    if (this.attandance_response_data.punchInTime) {
      const currentTime = new Date(); // Get the current time
      const punchInTime = new Date(this.attandance_response_data.punchInTime);

      // Calculate the time difference in milliseconds
      const timeDifferenceMs = currentTime.getTime() - punchInTime.getTime();

      // You can convert the time difference to other units like seconds, minutes, hours, etc.
      const timeDifferenceSeconds = timeDifferenceMs / 1000;
      const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60);
      const timeDifferenceHours = timeDifferenceMs / (1000 * 60 * 60);

      console.log('Time Difference (ms):', timeDifferenceMs);
      console.log('Time Difference (seconds):', timeDifferenceSeconds);
      console.log('Time Difference (minutes):', timeDifferenceMinutes);
      console.log('Time Difference (hours):', timeDifferenceHours);
    }
  }

    // if (this.punchInTime) {
    //   const now = new Date();
    //   const diff = now.getTime() - this.punchInTime.getTime();
    //   this.diffSeconds = Math.round(diff / 1000);
      
    //   this.diffHours = Math.floor(this.diffSeconds / 3600);
    //   this.diffMinutes = Math.floor((this.diffSeconds % 3600) / 60);
    //   this.diffSeconds = this.diffSeconds % 60; // Remaining seconds after extracting hours and minutes

    //   if (this.diffSeconds >= 60) {
    //     this.diffMinutes += 1;
    //     this.diffSeconds = 0;
    //   }
    //   if (this.diffMinutes >= 60) {
    //     this.diffHours += 1;
    //     this.diffMinutes = 0;
    //   }

    // } else {
    //   console.log('No punch-in time recorded.');
    // }
    // this.punchType="Out"

  }

//   public calculateDifference(): void {
//     if (this.punchInTime) {
//       const now = new Date();
//       const diff = now.getTime() - this.punchInTime.getTime();
//       this.diffSeconds = Math.round(diff / 1000);
      
//       this.diffHours = Math.floor(this.diffSeconds / 3600); // There are 3600 seconds in an hour
//       this.diffMinutes = Math.floor((this.diffSeconds % 3600) / 60); // Use modulo to get remainder and divide by 60 to convert to minutes

//       console.log(`Time since last punch in: ${this.diffHours} hours and ${this.diffMinutes} minutes`);
//     } else {
//       console.log('No punch-in time recorded.');
//     }
// }

  
  // public calculateDifference(): void {
  //   if (this.punchInTime) {
  //     const now = new Date();
  //     const diff = now.getTime() - this.punchInTime.getTime();
  //     const diffSeconds = Math.round(diff / 1000);
  //     this.diffMinutes = Math.round(diffSeconds / 60);
  //     console.log(`Time since last punch in: ${this.diffMinutes} minutes`);
  //   } else {
  //     console.log('No punch-in time recorded.');
  //   }
  // }
  
  // public punchIt(){
  //   let stopWatch; 
  //   if(this.punchType == "In"){
  //     stopWatch = setInterval( () => {
  //       this.workTime_seconds += 1
  //       if(this.workTime_seconds === 60){
  //         this.workTime_minutes += 1
  //         this.workTime_seconds = 0
  //       }
  
  //       if(this.workTime_minutes === 60){
  //         this.workTime_hours += 1
  //         this.workTime_minutes = 0
  //       }
  
  //       if(this.workTime_hours === 24){
  //         this.workTime_hours = 0
  //       }
  
  //       this.workTime = `${this.workTime_hours}:${this.workTime_minutes}:${this.workTime_seconds} hrs`
  //     },100)
  //     this.punchType = "Out"
  //   }
    
  //   else{
  //     clearInterval(stopWatch)
  //     this.punchType = "In"
  //   }
  // }

  // public punchInTime: Date | null = null;  // Punch In ke time ko store karne ke liye
  
  // public punchIt(){
  //   if(this.punchType == "In"){
  //     this.punchInTime = new Date();  // Punch In ka current time store karte hain
  //     console.log('Punched In at:', this.punchInTime);
  //     this.punchType = "Out";
  //   } else {
  //     this.punchInTime = null;
  //     this.punchType = "In";
  //   }
  //   this.punchType = "Out"
  // }

  // public calculateDifference() {
  //   console.log("adkjfilj");
    
  //   if(this.punchInTime) {
  //     let currentTime = new Date();
  //     let difference = currentTime.getTime() - this.punchInTime.getTime();  // Milliseconds mein difference

  //     let secondsDifference = Math.floor(difference / 1000);
  //     let minutesDifference = Math.floor(secondsDifference / 60);
  //     secondsDifference = secondsDifference % 60;

  //     console.log(`Difference since Punch In: ${minutesDifference} minutes and ${secondsDifference} seconds`);
  //   }
  // }



  

// }
