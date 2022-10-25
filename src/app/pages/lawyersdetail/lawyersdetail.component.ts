import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lawyers, LawyersService } from '../lawyers/lawyers.service';

@Component({
  selector: 'app-lawyersdetail',
  templateUrl: './lawyersdetail.component.html',
  styleUrls: ['./lawyersdetail.component.scss'],
})
export class LawyersdetailComponent implements OnInit {
  pageTitle: string = 'Lawyer id';
  lawyer: Lawyers;
  
  constructor(private route: ActivatedRoute, private lawyerService: LawyersService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.lawyer = this.lawyerService.getLawyer(id);
    this.pageTitle += `: ${id}`
  }

}
