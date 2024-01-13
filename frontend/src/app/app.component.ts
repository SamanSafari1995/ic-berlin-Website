import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import { GlassesComponent } from './components/pages/glasses/glasses.component';
// import { CollectionComponent } from './components/pages/collection/collection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHeader: boolean = false;

  constructor(private translateService:TranslateService,private router:Router,
    private activated:ActivatedRoute){
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');

    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url !== '/' && val.url!=='/#discover'){
          this.showHeader = false;
        }
        else{
          this.showHeader = true;
        }
      }
    })

  }


}
