import { Component, OnInit } from '@angular/core';
import { FAQs, FAQsService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FAQComponent implements OnInit {
  faqs: FAQs[] = []
  constructor(private faqsService: FAQsService) { }

  ngOnInit() {
    this.faqs = this.faqsService.faqList;
  }

}

