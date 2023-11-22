import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterEvent } from '@angular/router';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent {
  ownerNameControl = new FormControl("");
  ownerIdControl = new FormControl();
  
  // centerForm to store input from user
  ownerForm = new FormGroup({
    name : this.ownerNameControl,
    ownerId:this.ownerIdControl,
    
  })
 constructor(private ownerService:OwnerService){

 }



  onSubmit(){
this.ownerService.addOwner(this.ownerForm.value).subscribe({
next:(data)=>{
  console.warn(data);
  alert("successful adding !")
},
  error:(error)=>{
    console.log(error);
    
  }
})
  }
}
