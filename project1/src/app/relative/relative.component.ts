import { Component, OnInit, Input } from '@angular/core';
import { Relative }  from "./relative.model";
@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.scss']
})
export class RelativeComponent implements OnInit {
  @Input() relative: Relative

  constructor() { }

  ngOnInit(): void {
  }

}
