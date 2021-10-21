import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-jobprofile',
  templateUrl: './jobprofile.component.html',
  styleUrls: ['./jobprofile.component.css'],
})
export class JobprofileComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<FormGroup>();


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.newItemEvent.emit(this.form);
  }

  form = this.fb.group({

    companyName: [
      '',
      {
        validators: [Validators.required, Validators.minLength(2)]
      }
    ],
    location: [
      '',
      {
        validators: [Validators.required, Validators.minLength(4)]
      }
    ],

    jobtitle: [
      '',
      {
        validators: [Validators.required, Validators.minLength(4)],
      },
    ],
    jobDescription: [
      '',
      {
        validators: [Validators.required, Validators.minLength(4)]
      }
    ],
    salary: [
      '',
      {
        validators: [Validators.required, Validators.min(5000)]
      }
    ]

  });











  get jobtitle(){
    return this.form.controls['jobtitle'];
  }

  get jobdescription(){
    return this.form.controls['jobDescription'];
  }

  get companyName(){
    return this.form.controls['companyName'];
  }

  get salary(){
    return this.form.controls['salary'];
  }

  get location(){
    return this.form.controls['location'];
  }

  get valid(){
    return this.form.controls;
  }
}
