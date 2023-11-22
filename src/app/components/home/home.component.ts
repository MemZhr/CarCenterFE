import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ShowBackground:boolean=false
  constructor(private loadService:LoadingService){

  }
  ngOnInit(): void {
    this.loadService.setLoadingState();
    setTimeout(()=>{
      this.loadService.hideLoader();
      this.ShowBackground=true
    },3000);


  }



}
