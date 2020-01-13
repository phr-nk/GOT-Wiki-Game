import { Injectable } from '@angular/core';
import {Http, Headers,Response, URLSearchParams, RequestOptions} from '@angular/http';
import { map, catchError} from 'rxjs/operators';
@Injectable()
export class WikiServiceService {

  private randomURL = "https://awoiaf.westeros.org/api.php?action=parse&format=json&page="

  constructor(private _http:Http) { }

 
  
  getURLJSON(link:string)
  {
    let headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*")
    let options = new RequestOptions({headers: headers});
    console.log(link)
    return this._http.get(link,options).pipe(map((res:Response)=> res.json()));
  
  }
  getRandomURL()
  {
     console.log(this._http.get("https://awoiaf.westeros.org/index.php/Special:Random"))
  }


}
