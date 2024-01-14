import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'search',
    loadChildren: ()=>import('../app/components/partials/search/search.module').then(
      m=>m.SearchModule
    )
  },
  {
    path:'collection/:name',
    loadChildren: ()=>import('../app/components/pages/collection/collection.module').then(
      m=>m.CollectionModule
    )
  },
  {
    path:':glassesType/:filter',
    loadChildren: ()=>import('../app/components/pages/glasses/glasses.module').then(
      m=>m.GlassesModule
    )
  },
  {
    path:':glassesType',
    loadChildren: ()=>import('../app/components/pages/glasses/glasses.module').then(
      m=>m.GlassesModule
    )
  }
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
}
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
