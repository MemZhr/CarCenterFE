import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CenterService } from 'src/app/service/center.service';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent {
  centerNameControl = new FormControl("");
  centerAddressControl = new FormControl("");
  centerIdControl = new FormControl();
  
  // centerForm to store input from user
  centerForm = new FormGroup({
    name : this.centerNameControl,
    address:this.centerAddressControl,
    centerId:this.centerIdControl
  })

  constructor(private centerService: CenterService,){

  }
  onSubmit(){
    this.centerService.postCenter(this.centerForm.value).subscribe((result)=>{
      console.warn(result);
      
    })
    console.log(this.centerForm.value);

  }


}
