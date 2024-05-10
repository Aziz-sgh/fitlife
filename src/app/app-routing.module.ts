import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ActiviteComponent } from './activite/activite.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { AddProductComponent } from './add-product/add-product.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path:"registre",component:RegistreComponent},
  {path:"login",component:LoginComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  {path:"activite",component:ActiviteComponent},
  {path:"contact",component:ContactComponent},
  {path:"admin",component:AdminComponent},
  {path:"users",component:UsersComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"store",component:StoreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
