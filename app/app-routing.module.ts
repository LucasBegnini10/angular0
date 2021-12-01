import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroJogoComponent } from './views/cadastro-jogo/cadastro-jogo.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';



import { DepartamentosComponent } from './views/departamentos/departamentos.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';



const routes: Routes = [
 
 {
    path:'',
    component: HomeComponent

 },
  {
    path:"departamentos",
    component: DepartamentosComponent
 },
 {
  path:'login',
  component: LoginComponent
 },
 {
   path:"cadastro",
   component: CadastroComponent
 },
{
  path: "cadastro-jogo",
  component: CadastroJogoComponent
}
   
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
