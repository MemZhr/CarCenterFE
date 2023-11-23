import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent {
  ownerNameControl = new FormControl("");
  ownerIdControl = new FormControl();
  
  // to store input from user
  ownerForm = new FormGroup({
    name : this.ownerNameControl,
    ownerId:this.ownerIdControl,
    
  })

 constructor(private ownerService:OwnerService,private router: Router){

 }



  onSubmit(){
this.ownerService.addOwner(this.ownerForm.value).subscribe({
next:(data)=>{
  console.warn(data);
  alert("successful adding !")
  this.router.navigate(['/owners'])
},
  error:(error)=>{
    console.log(error);
    
  }
})
  }



}
