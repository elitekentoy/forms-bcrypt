import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-joboutput',
  templateUrl: './joboutput.component.html',
  styleUrls: ['./joboutput.component.css']
})
export class JoboutputComponent implements OnChanges {

  @Input() companyName: any;
  @Input() location: any;
  @Input() jobTitle: any;
  @Input() jobDescription: any;
  @Input() salary: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
  }

}
