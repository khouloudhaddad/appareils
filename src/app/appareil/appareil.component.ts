import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() name!: string;
  @Input() status!: string;
  @Input() index!: number;
  lastModified = new Date();

  constructor(private service: AppareilService ) { }

  getStatus() {
    return this.status;
  }

  onSwitch() {
    console.log(this.index)
    this.service.switchStatus(this.index);
  }

  ngOnInit(): void {
  }

}
