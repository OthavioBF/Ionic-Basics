import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FAQComponent } from "./faq.component";

const routes: Routes = [
    {
        path: '',
        component: FAQComponent
    }   
]

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    declarations: [FAQComponent]
})
export class FAQsModule {}