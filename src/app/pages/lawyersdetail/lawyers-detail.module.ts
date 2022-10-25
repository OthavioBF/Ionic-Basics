import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "src/app/components/header/header.component";
import { SharedModule } from "src/app/shared/shared.module";
import { LawyersService } from "../lawyers/lawyers.service";
import { LawyersdetailComponent } from "./lawyersdetail.component";

const routes: Routes = [
    {
        path: '',
        component: LawyersdetailComponent
    }
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        LawyersdetailComponent,
        HeaderComponent
    ],
    providers: [
        LawyersService
    ]
})
export class LawyersDetailModule {}