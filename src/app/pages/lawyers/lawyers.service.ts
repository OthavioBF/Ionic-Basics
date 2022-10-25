import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'

export interface Lawyers {
    name: string;
    focus: string;
    pic: string;
    phone: string;
    web: string;
    id: string;
    path: string;
    info: string;
}

@Injectable({
    providedIn: 'root'
})
export class LawyersService {
    private lawyersUrl = lawyers
    public lawyers: Lawyers[] = []
    constructor(private http: HttpClient) {
        if (this.lawyers.length == 0) {
            this.getLawyers();
        }
    }

    getLawyers(): void {
        // this.http.get<Lawyers[]>(this.lawyersUrl).subscribe(
        //     {
        //         next: lawyers => this.lawyers = lawyers
        //     }
        // )
        this.lawyers = this.lawyersUrl;
    }

    getLawyer(id: string): Lawyers {
        return this.lawyers.find(l => l.id == id);
    }
}

const lawyers = JSON.parse(
    `
    [
        {
            "name": "John Doe",
            "focus": "criminal",
            "pic": "https://imageio.forbes.com/blogs-images/pauladavislaack/files/2017/12/work-colleagues.jpg?format=jpg&width=960",
            "phone": "555-555-555",
            "web": "www.mywebapp.com.br",
            "id": "A1",
            "path": "/lawyerdetail",
            "info": "Nisi consequat ullamco cupidatat irure consectetur incididunt anim. Lorem non do quis Lorem elit duis ut minim ut occaecat. Eiusmod velit laboris deserunt consequat ex ea adipisicing pariatur Lorem ad voluptate. Ipsum ipsum do consequat consequat occaecat enim adipisicing sunt mollit qui magna pariatur culpa commodo."
          },
          {
            "name": "Alex Murph",
            "focus": "criminal",
            "pic": "https://imageio.forbes.com/blogs-images/pauladavislaack/files/2017/12/work-colleagues.jpg?format=jpg&width=960",
            "phone": "555-555-555",
            "web": "www.mywebapp.com.br",
            "id": "A2",
            "path": "/lawyerdetail",
            "info": "Nisi consequat ullamco cupidatat irure consectetur incididunt anim. Lorem non do quis Lorem elit duis ut minim ut occaecat. Eiusmod velit laboris deserunt consequat ex ea adipisicing pariatur Lorem ad voluptate. Ipsum ipsum do consequat consequat occaecat enim adipisicing sunt mollit qui magna pariatur culpa commodo."
          },
          {
            "name": "Ben Ten",
            "focus": "criminal",
            "pic": "https://imageio.forbes.com/blogs-images/pauladavislaack/files/2017/12/work-colleagues.jpg?format=jpg&width=960",
            "phone": "555-555-555",
            "web": "www.mywebapp.com.br",
            "id": "A3",
            "path": "/lawyerdetail",
            "info": "Nisi consequat ullamco cupidatat irure consectetur incididunt anim. Lorem non do quis Lorem elit duis ut minim ut occaecat. Eiusmod velit laboris deserunt consequat ex ea adipisicing pariatur Lorem ad voluptate. Ipsum ipsum do consequat consequat occaecat enim adipisicing sunt mollit qui magna pariatur culpa commodo."
          },
          {
            "name": "Alice Kruger",
            "focus": "criminal",
            "pic": "https://imageio.forbes.com/blogs-images/pauladavislaack/files/2017/12/work-colleagues.jpg?format=jpg&width=960",
            "phone": "555-555-555",
            "web": "www.mywebapp.com.br",
            "id": "A4",
            "path": "/lawyerdetail",
            "info": "Nisi consequat ullamco cupidatat irure consectetur incididunt anim. Lorem non do quis Lorem elit duis ut minim ut occaecat. Eiusmod velit laboris deserunt consequat ex ea adipisicing pariatur Lorem ad voluptate. Ipsum ipsum do consequat consequat occaecat enim adipisicing sunt mollit qui magna pariatur culpa commodo."
          },
          {
            "name": "Wilsonvai",
            "focus": "criminal",
            "pic": "https://imageio.forbes.com/blogs-images/pauladavislaack/files/2017/12/work-colleagues.jpg?format=jpg&width=960",
            "phone": "555-555-555",
            "web": "www.mywebapp.com.br",
            "id": "A5",
            "path": "/lawyerdetail",
            "info": "Nisi consequat ullamco cupidatat irure consectetur incididunt anim. Lorem non do quis Lorem elit duis ut minim ut occaecat. Eiusmod velit laboris deserunt consequat ex ea adipisicing pariatur Lorem ad voluptate. Ipsum ipsum do consequat consequat occaecat enim adipisicing sunt mollit qui magna pariatur culpa commodo."
          },
          {
            "name": "Jenny Jugder",
            "focus": "criminal",
            "pic": "https://imageio.forbes.com/blogs-images/pauladavislaack/files/2017/12/work-colleagues.jpg?format=jpg&width=960",
            "phone": "555-555-555",
            "web": "www.mywebapp.com.br",
            "id": "A6",
            "path": "/lawyerdetail",
            "info": "Nisi consequat ullamco cupidatat irure consectetur incididunt anim. Lorem non do quis Lorem elit duis ut minim ut occaecat. Eiusmod velit laboris deserunt consequat ex ea adipisicing pariatur Lorem ad voluptate. Ipsum ipsum do consequat consequat occaecat enim adipisicing sunt mollit qui magna pariatur culpa commodo."
          }
    ]
    `
)
    
