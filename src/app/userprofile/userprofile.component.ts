import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<object>();

  constructor() { }

  val = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    hashedPassword: '',
    cpNum:'',
  }

  ngOnInit(): void {
  }

  onSubmit(v: NgForm){ 
    
  }

  getVal(){
    const salt = bcrypt.genSaltSync(10);
    this.val.hashedPassword = bcrypt.hashSync(this.val.password, 10);
    this.newItemEvent.emit(this.val);
  }

}
