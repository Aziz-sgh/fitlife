import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { ActiviteComponent } from './activite/activite.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ModelComponent } from './model/model.component';
import { UsersComponent } from './users/users.component';
import { AddProductComponent } from './add-product/add-product.component';
import { StoreComponent } from './store/store.component';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { EntraineurComponent } from './entraineur/entraineur.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegistreComponent,
    LoginComponent,
    ActiviteComponent,
    ContactComponent,
    AdminComponent,
    ModelComponent,
    UsersComponent,
    AddProductComponent,
    StoreComponent,
    AddoffreComponent,
    EntraineurComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
