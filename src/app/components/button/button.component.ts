import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
/* import { EventEmitter } from 'stream'; */

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text:string = 'Submit';
  @Input() color:string = 'black';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
