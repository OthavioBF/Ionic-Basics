import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "src/app/components/header/header.component";
import { SharedModule } from "src/app/shared/shared.module";
import { LawyersComponent } from "./lawyers.component";
import { LawyersService } from "./lawyers.service";

const routes: Routes = [
    {
        path: '',
        component: LawyersComponent
    }
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        LawyersComponent,
        HeaderComponent,
    ],
    providers: [LawyersService]

})
export class LawyersModule {}