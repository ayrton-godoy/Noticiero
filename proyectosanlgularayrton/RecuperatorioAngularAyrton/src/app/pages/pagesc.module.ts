import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InventarioComponent } from './inventario/inventario.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NoticiasComponent,
    InventarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagescModule { }
