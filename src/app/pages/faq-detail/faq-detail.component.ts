import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FAQs, FAQsService } from '../faq/faq.service';

@Component({
  selector: 'app-faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.scss'],
})
export class FaqDetailComponent implements OnInit {
  faq: FAQs;
  constructor(private route: ActivatedRoute, private faqsService: FAQsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.faq = this.faqsService.getFAQ(id);
  }

}
