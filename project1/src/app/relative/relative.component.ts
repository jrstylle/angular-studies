import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.scss']
})
export class RelativeComponent implements OnInit {
  mother: string = "Maria da Conceição";
  @Input() name: string;
  @Input() age: number;
  constructor() { }

  ngOnInit(): void {
  }

}
