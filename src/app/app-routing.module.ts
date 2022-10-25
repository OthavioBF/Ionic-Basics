import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutModule } from './pages/about/about.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactModule)
  },
  {
    path: 'lawyers',
    loadChildren: () => import('./pages/lawyers/lawyers.module').then( m => m.LawyersModule),
  },
  {
    path: 'lawyersdetail/:id',
    loadChildren: () => 
      import('./pages/lawyersdetail/lawyers-detail.module')
      .then( m => m.LawyersDetailModule),
  },
  {
    path: 'faqs',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FAQsModule),
  },
  {
    path: 'faqs-details/:id',
    loadChildren: () => import('./pages/faq-detail/faq-detail.module').then( m => m.FAQsDetailModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
