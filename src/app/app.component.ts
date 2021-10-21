import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'forms';
  upData = {};
  jpData: any;
  showJobOutput = false;
  showUserOutput = false;

  firstName: any;
  lastName : any;
  emailadd : any;
  hashedpassword :any;
  cpNum : any;

  companyName: any;
  location: any;
  jobTitle: any;
  jobDescription: any;
  salary: any;



  setUPData(theData: object){
    this.upData = theData;
    this.setThingsUp();
  }

  getUPData(){
    return this.upData;
  }

  getFirstName(){
    return this.firstName;
  }

  getLastName(){
    return this.lastName;
  }

  getEmailAddress(){
    return this.emailadd;
  }

  getHashedPassword(){
    return this.hashedpassword;
  }

  getCPNum(){
    return this.cpNum;
  }

  setThingsUp(){
    this.firstName = Object.values(this.upData)[0];
    this.lastName = Object.values(this.upData)[1];
    this.emailadd = Object.values(this.upData)[2];
    this.hashedpassword = Object.values(this.upData)[4];
    this.cpNum = Object.values(this.upData)[5];
    this.showUserOutput = true;
  }

  setJPData(theData: FormGroup){
    this.jpData = theData;
    this.setJobThingsUp();
  }

  getJPData(){
    return this.jpData;
  }

  setJobThingsUp(){
    this.companyName = this.jpData.controls.companyName.value;
    this.location = this.jpData.controls.location.value;
    this.jobTitle = this.jpData.controls.jobtitle.value;
    this.jobDescription = this.jpData.controls.jobDescription.value;
    this.salary = this.jpData.controls.salary.value;
    this.showJobOutput = true;
  }

  getCompanyName(){
    return this.companyName;
  }

  getLocation(){
    return this.location;
  }

  getJobTitle(){
    return this.jobTitle;
  }

  getJobDescription(){
    return this.jobDescription;
  }

  getSalary(){
    return this.salary;
  }



}
