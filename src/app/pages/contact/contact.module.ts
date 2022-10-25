import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { ContactComponent } from "./contact.component";

const routes: Routes = [
    {
        path: '',
        component: ContactComponent
    }
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ContactComponent]
})
export class ContactModule {}