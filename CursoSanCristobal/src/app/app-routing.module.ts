import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuatroComponent } from './cuatro/cuatro.component';
import { DosComponent } from './dos/dos.component';
import { HijoComponent } from './hijo/hijo.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { UnoComponent } from './uno/uno.component';

const routes: Routes = [
  { path : 'uno', component: UnoComponent},
  { path: 'test/:id',component:TestComponent},
  { path : 'dos', component: DosComponent, data : { title: 'Componente dos' } },
  { path: 'tres', component:HijoComponent},
  { path: 'cuatro', component:CuatroComponent},
  { path:'',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
