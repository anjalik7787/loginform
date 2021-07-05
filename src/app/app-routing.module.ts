import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabseComponent } from './databse/databse.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HeaderComponent } from './header/header.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

const routes: Routes = [
  {path : "firstpage" , component:FirstpageComponent},
  {path :"secondpage", component:SecondpageComponent},
  {path : "header", component : HeaderComponent},
  {path : "database", component : DatabseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
