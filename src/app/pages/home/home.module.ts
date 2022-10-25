import { NgModule } from '@angular/core';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, HeaderComponent ],
})
export class HomePageModule {}
