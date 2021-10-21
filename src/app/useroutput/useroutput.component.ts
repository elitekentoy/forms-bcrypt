import { Component, OnInit, Input, IterableDiffers, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-useroutput',
  templateUrl: './useroutput.component.html',
  styleUrls: ['./useroutput.component.css']
})
export class UseroutputComponent implements OnChanges {

  @Input() fName: any;
  @Input() lName: any;
  @Input() emailadd: any;
  @Input() password: any;
  @Input() cpNum: any;

  
  constructor() { }

  ngOnChanges(changes: SimpleChanges):void{
    console.log(changes)
    
  }


  

  

}
