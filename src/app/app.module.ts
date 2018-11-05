// ==========================================================
// Routes
// ==========================================================
import { APP_ROUTES } from './app.routes';
// ==========================================================
// End Routes
// ==========================================================
// ==========================================================
// Modules
// ==========================================================
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
// ==========================================================
// End Modules
// ==========================================================
// ==========================================================
// Components
// ==========================================================
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// ==========================================================
// End Components
// ==========================================================


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
