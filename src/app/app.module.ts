import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /*Requisicoes Ajax*/
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { HttpInterceptorModule } from './service/header-interceptor';
import { UsuarioAddComponent } from './componente/usuario/usuario-add/usuario-add.component';

export const appRouters: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'userList', component: UsuarioComponent },
  { path: 'usuarioAdd', component: UsuarioAddComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
