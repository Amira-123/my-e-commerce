import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    standalone: false
})
export class SelectComponent implements OnInit {
  @Input() title:string="";
  @Input() data:any[]=[];
  @Output() selectedValue:EventEmitter<string>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  selectedCategory(event:any){
   this.selectedValue.emit(event)
  }

}
