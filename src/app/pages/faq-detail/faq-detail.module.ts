import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FAQsService } from "../faq/faq.service";
import { FaqDetailComponent } from "./faq-detail.component";

const routes: Routes = [
    {
        path: '',
        component: FaqDetailComponent
    }
]

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    declarations: [FaqDetailComponent],
    providers: [FAQsService]
})
export class FAQsDetailModule {}