import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { NumbersComponent } from './numbers/numbers.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {path:'',redirectTo:'estudiantes',pathMatch:'full'},
  {path:'estudiante',component:ListComponent},
  {path:'create',component:CreateComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'show/:id',component:ShowComponent},
  {path:'numbers',component:NumbersComponent},
  {path:'directives',component:DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
