import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule
    ]
})
export class SharedModule {}