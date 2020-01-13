import { Component, OnInit } from '@angular/core';
import { WikiServiceService } from 'src/app/services/wiki-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[WikiServiceService] 
})
export class HomepageComponent implements OnInit {

  sURL:string = "https://awoiaf.westeros.org/api.php?action=parse&format=json&page=";
  newUrl:string
  title:string;
  html:string;
  shtml:string;
  regex = new RegExp("href=\"/index.php/","g");
  input:string
  currentUrl:string;
  constructor(private _wikiService:WikiServiceService) { }

  showUrl()
  {
      
  }
  
  goToInitalPage()
  {
    var page = (<HTMLInputElement>document.getElementById("wikiname")).value;
    
    this.newUrl = this.sURL + page;
    this.loadJSON(this.newUrl);
    this._wikiService.getRandomURL();
  }

  goToPage(page)
  {
    
    this.newUrl = this.sURL + page;
    this.loadJSON(this.newUrl)
  
  }

  loadPage(htmll)
  {

  }
 
  loadJSON(link)
  {
    this._wikiService.getURLJSON(link).
      subscribe(res => {
        console.log(res)
         this.html= res.parse.text["*"];
         this.shtml = res.parse.text["*"];
         //console.log(this.regex)
         var ress = this.html.replace(this.regex,"href=\"https://awoiaf.westeros.org/api.php?action=parse&format=json&page=")
         this.html = ress
         console.log(ress)

      })
  }


 

  ngOnInit() {

  }

  

}
