import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { BlogComponent } from "./blog.component";

const routes: Routes = [
    {
        path: '',
        component: BlogComponent
    }
]

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    declarations: [BlogComponent]
})
export class BlogModule {}