import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/cars.model';
import { CarsService } from 'src/app/service/cars.service';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
constructor(private cars:CarsService,private loaderService:LoadingService){

}

Cars : CarModel[]= [];
  ngOnInit(): void {
    this.loaderService.setLoadingState();
    setTimeout(()=>{
      this.loaderService.hideLoader();
    },3000);
    setTimeout(()=>{
      this.cars.getCars().subscribe((data)=>{
        console.log(data);
        this.Cars=data
       })
    },3000);

  }


}
