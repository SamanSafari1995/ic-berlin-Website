import { Component, OnInit, HostListener, ViewChild, ElementRef, Pipe, Input } from '@angular/core';
import { fadeContent, collaps,remove } from 'src/app/animations/animation';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Collection } from 'src/app/models/collection';
import { CollectionService } from 'src/services/collection.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    collaps,
    fadeContent,
    remove
  ]

})



export class HeaderComponent implements OnInit  {

 collectionData:Collection[] = [];
  scrollEvent: boolean = false;
  glasessMenu: boolean = false;
  sunGlassesMenu: boolean = false;
  collectionMenu: boolean = false;
  activeMenu: boolean = false;
  viewport: boolean = false;
  lang:string = '';
  @ViewChild('scroll') scrollbtn!: ElementRef;



  constructor(private router:Router,
     private translateService:TranslateService,
     private collectionService:CollectionService) {
      this.collectionData = collectionService.getCollection();
   }

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en'
  }

  changeLang(lang:any){
    const selectedLang = lang.target.value;
    localStorage.setItem('lang', selectedLang);

    this.translateService.use(selectedLang);
  }

  @HostListener("document:scroll")
  scroll(){
    if(document.body.scrollTop> 300 || document.documentElement.scrollTop > 300){
      this.scrollEvent = true;
    }
    else{
      this.scrollEvent = false;
    }
  }

  isOpen(){
    this.viewport = !this.viewport;
    this.activeMenu = !this.activeMenu
    this.glasessMenu = false;
    this.sunGlassesMenu = false;
    this.collectionMenu = false;
  }

  goToHomePage(fragment:any){
    this.router.navigateByUrl(fragment)
  }

  openGlasessMenuDeatails(){
    if(this.glasessMenu){
      this.activeMenu = false;
    }else{
      this.activeMenu = true;
    }
    this.glasessMenu = !this.glasessMenu;
    this.sunGlassesMenu = false;
    this.collectionMenu = false;
  }

  openSunGlasessMenuDeatails(){
    if(this.sunGlassesMenu){
      this.activeMenu = false;
    }else{
      this.activeMenu = true;
    }
    this.sunGlassesMenu = !this.sunGlassesMenu;
    this.glasessMenu = false;
    this.collectionMenu = false;
  }

  opencollectionMenuDeatails(){
    if(this.collectionMenu){
      this.activeMenu = false;
    }
    else{
      this.activeMenu = true;
    }
    this.collectionMenu = !this.collectionMenu;
    this.glasessMenu = false;
    this.sunGlassesMenu = false;
  }

  clickOut(){
    this.activeMenu = false;
    this.glasessMenu = false;
    this.sunGlassesMenu = false;
    this.collectionMenu = false;
  }
}
