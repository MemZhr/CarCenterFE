import { Component, OnInit } from '@angular/core';
import { Center } from 'src/app/models/center.model';
import { CenterService } from 'src/app/service/center.service';
import{FormControl,FormGroup} from '@angular/forms'
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  constructor(private centerService: CenterService,private loaderService:LoadingService) { }
  // making object from Center for retrieving 
  centerData: Center[] = [];

  isUpdateVisible: { [key: string]: boolean } = {};
  centerNameControl = new FormControl("");
  centerAddressControl = new FormControl("");
  
  
  // centerForm to store input from user
  centerForm = new FormGroup({
    name : this.centerNameControl,
    address:this.centerAddressControl
  })


  ngOnInit(): void {

this.loadCenters()


    

  }


loadCenters(){
  this.loaderService.setLoadingState();
  setTimeout(()=>{
    this.loaderService.hideLoader();
  },3000);
  setTimeout(()=>{
    this.centerService.getCenters().subscribe({

      next: (data) => {
        console.log(data);

        this.centerData = data

      },
      error: (error) => {
        console.log(error);

      }
    })

  },3000);
}

  deleteCenter(id:number){
  this.centerService.deleteCenter(id).subscribe((data)=>{
    console.log(data);

    
  })
  this.loadCenters()
  }  

  updateCenter(id:number){
this.centerService.updateCenter(id,this.centerForm.value).subscribe((data)=>{
  console.log(data);
  
})
this.loadCenters()
  }
  

  toggleUpdate(centerId: number) {
    
    this.isUpdateVisible[centerId] = !this.isUpdateVisible[centerId];
    
    Object.keys(this.isUpdateVisible)
    .filter(key => +key !== centerId)
    .forEach(key => this.isUpdateVisible[key] = false);
}
   
}
