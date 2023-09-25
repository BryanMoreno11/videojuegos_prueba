import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranquiciaComponent } from './components/franquicia/franquicia.component';
import { HomeComponent } from './components/home/home.component';
import { FranquiciaEditComponent } from './components/franquicia-edit/franquicia-edit.component';

const routes: Routes = [
  {path:"franquicias", component:FranquiciaComponent},
  {path:"home", component:HomeComponent},
  {path:"franquicia-edit", component:FranquiciaEditComponent},
  {path:"franquicia-edit/:id", component:FranquiciaEditComponent},
  { path: '**', pathMatch:'full', redirectTo: 'personas'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
