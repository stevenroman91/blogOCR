import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onLove(){
    this.loveIts++;
  }

  onDontLove(){
    this.loveIts--;
  }

  getColor(){
    if(this.loveIts>0){
      return 'green';
    } else if (this.loveIts<0){
      return 'red';
    }
  }

}
