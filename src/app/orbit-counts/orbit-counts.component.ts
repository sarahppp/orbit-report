import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite'; 

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})

export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[]; 

  constructor() { }

  ngOnInit() {
  }

  findType (satellites: Satellite[], types: string){
    let x: number = 0;
    for(let satellite of satellites){
      if(satellite.type.includes(types)){
        x += 1; 
      }
    }
    return x 
 }
}
