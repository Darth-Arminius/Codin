import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "./material.module";

const appRoutes: Routes = [{ path: "home", component: HomeComponent }];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
