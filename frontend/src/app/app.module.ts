import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/partials/header/header.component';
import { MaterialsModule } from './modules/materials/materials.module';
import { ClickOutsideDirective } from './components/partials/directive/clickOutside';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './components/pages/home/home.component';
import { NextDirective } from './components/pages/directives/next.directive';
import { PrevDirective } from './components/pages/directives/prev.directive';
import { GlassesComponent } from './components/pages/glasses/glasses.component';


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ClickOutsideDirective,
        HomeComponent,
        NextDirective,
        PrevDirective,
        GlassesComponent
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader:{
            provide:TranslateLoader,
            useFactory:HttpLoaderFactory,
            deps:[HttpClient]
          }
        })
    ]
})

export class AppModule { }

