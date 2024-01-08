import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { GlassesComponent } from './components/pages/glasses/glasses.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:':glassesType/:filter',component:GlassesComponent},
  {path:':glassesType',component:GlassesComponent},

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
