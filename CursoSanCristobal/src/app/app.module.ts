import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HijoComponent } from './hijo/hijo.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPlantillaComponent } from './form-plantilla/form-plantilla.component';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { CuatroComponent } from './cuatro/cuatro.component';
import { CincoComponent } from './cinco/cinco.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HijoComponent,
    UnoComponent,
    DosComponent,
    HomeComponent,
    FormPlantillaComponent,
    FormReactivoComponent,
    CuatroComponent,
    CincoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
