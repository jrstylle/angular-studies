import { Component, OnInit, Input } from '@angular/core';
import { Shinobi }  from "./shinobi.model";
@Component({
  selector: 'app-shinobi',
  templateUrl: './shinobi.component.html',
  styleUrls: ['./shinobi.component.scss']
})
export class ShinobiComponent implements OnInit {
  @Input() shinobi: Shinobi

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(): void {
    console.log(this.shinobi.name);
  }

}
