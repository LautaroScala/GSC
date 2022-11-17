import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DosComponent } from './dos/dos.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { UnoComponent } from './uno/uno.component';

const routes: Routes = [
  { path : 'uno', component: UnoComponent, children:[
    {path: 'test/:id',component:TestComponent}
  ] },
  { path : 'dos', component: DosComponent, data : { title: 'Componente dos' } },
  { path:'',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
