import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Owner } from 'src/app/models/owners.model';
import { LoadingService } from 'src/app/service/loading.service';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit{
constructor(private owner:OwnerService,private loaderService:LoadingService){}

owners: Owner[]=[]

isUpdateVisible: { [key: string]: boolean } = {};



ownerNameControl = new FormControl("");
ownerIdControl = new FormControl();

// Form to store input from user
ownerForm = new FormGroup({
  name : this.ownerNameControl,
  ownerId:this.ownerIdControl
})


  ngOnInit(): void {
    this.loadOwners()
 
  }

loadOwners(){
  this.loaderService.setLoadingState();
  setTimeout(()=>{
    this.loaderService.hideLoader();
  },3000);
  setTimeout(()=>{
    this.owner.getOwners().subscribe((data)=>{
      this.owners=data
      
    })
  },3000);
}

updateOwner(id:number){
this.owner.updateOwner(id,this.ownerForm.value).subscribe({
  next:(data)=>{
    console.log(data);
    alert("Update Done successfully")
    this.loadOwners()
    
  },
  error:(error)=>{
    console.log(error);
    
  }
})

}



toggleUpdate(ownerId : number){
  const idString = ownerId.toString();

  this.isUpdateVisible[idString] = !this.isUpdateVisible[idString];
    
    // Close other update forms except the one clicked
    Object.keys(this.isUpdateVisible)
      .filter(key => +key !== ownerId)
      .forEach(key => this.isUpdateVisible[key] = false);

 
}

deleteOwner(id:number){
this.owner.deleteOwner(id).subscribe((data)=>{
  console.log(data);
  
})
}
}