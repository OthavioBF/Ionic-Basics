import { Injectable } from "@angular/core";

export interface FAQs {
    id: string;
    title: string;
    answer: string;
}  

@Injectable({
    providedIn: 'root'
})
export class FAQsService {
    public faqList: FAQs[] = []

    constructor() {
        this.getFAQs();
    }

    getFAQs() {
        this.faqList = FAQs;
    }

    getFAQ(id: string): FAQs {
        return this.faqList.find(faq => faq.id == id);
    }
}

const FAQs = [
    {
      id: 'F1',
      title: 'Is this Legit?',
      answer: 'Esse nulla sunt culpa sint id deserunt deserunt veniam et sint veniam exercitation elit Lorem. Reprehenderit fugiat dolor cupidatat consequat exercitation minim fugiat cupidatat commodo ut eiusmod occaecat laboris. Non irure consectetur culpa nulla irure Lorem incididunt ad velit proident laborum dolor mollit. Proident proident duis amet ipsum sit. Minim cillum proident pariatur nulla qui.',
    },
    {
      id: 'F2',
      title: 'What time do you answer?',
      answer: 'Esse nulla sunt culpa sint id deserunt deserunt veniam et sint veniam exercitation elit Lorem. Reprehenderit fugiat dolor cupidatat consequat exercitation minim fugiat cupidatat commodo ut eiusmod occaecat laboris. Non irure consectetur culpa nulla irure Lorem incididunt ad velit proident laborum dolor mollit. Proident proident duis amet ipsum sit. Minim cillum proident pariatur nulla qui.',
    },
    {
      id: 'F3',
      title: 'How many awards do you have?',
      answer: 'Esse nulla sunt culpa sint id deserunt deserunt veniam et sint veniam exercitation elit Lorem. Reprehenderit fugiat dolor cupidatat consequat exercitation minim fugiat cupidatat commodo ut eiusmod occaecat laboris. Non irure consectetur culpa nulla irure Lorem incididunt ad velit proident laborum dolor mollit. Proident proident duis amet ipsum sit. Minim cillum proident pariatur nulla qui.',
    },
    {
      id: 'F4',
      title: 'What the fuck is this page about?',
      answer: 'Esse nulla sunt culpa sint id deserunt deserunt veniam et sint veniam exercitation elit Lorem. Reprehenderit fugiat dolor cupidatat consequat exercitation minim fugiat cupidatat commodo ut eiusmod occaecat laboris. Non irure consectetur culpa nulla irure Lorem incididunt ad velit proident laborum dolor mollit. Proident proident duis amet ipsum sit. Minim cillum proident pariatur nulla qui.',
    },
    {
      id: 'F5',
      title: 'How many lawyers are in this company?',
      answer: 'Esse nulla sunt culpa sint id deserunt deserunt veniam et sint veniam exercitation elit Lorem. Reprehenderit fugiat dolor cupidatat consequat exercitation minim fugiat cupidatat commodo ut eiusmod occaecat laboris. Non irure consectetur culpa nulla irure Lorem incididunt ad velit proident laborum dolor mollit. Proident proident duis amet ipsum sit. Minim cillum proident pariatur nulla qui.',
    },
  ]