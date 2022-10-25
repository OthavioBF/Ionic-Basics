import { Component, OnInit, Output } from '@angular/core';
import { LawyersService } from './lawyers.service';



@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.component.html',
  styleUrls: ['./lawyers.component.scss'],
})
export class LawyersComponent implements OnInit {
  lawyers: any;
  constructor(private lawyersService: LawyersService) { }

  ngOnInit() {
    this.lawyers = this.lawyersService.lawyers;
  }

}
