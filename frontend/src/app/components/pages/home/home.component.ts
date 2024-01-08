import { Component, OnInit } from '@angular/core';
import { moveBackward, moveForward } from 'src/app/animations/animation';
import { Glasses } from 'src/app/models/glasses';
import { GlassesService } from 'src/services/glasses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  ,
  animations:[
    moveBackward,
    moveForward
  ]
})
export class HomeComponent implements OnInit {
  glasses:Glasses[] = [];
  moveForward = true;
  moveBackward = true;
  hover = false;

  constructor(private glassesService:GlassesService){
    this.glasses = glassesService.getAll();
  }

  ngOnInit(): void {
  }
  forward(){
    this.moveForward =!this.moveForward
  }
  backward(){
    this.moveBackward =!this.moveBackward
  }
  hoverIn(){
    this.hover = false;
  }
  hoverOut(){
    this.hover = true;
  }

}
