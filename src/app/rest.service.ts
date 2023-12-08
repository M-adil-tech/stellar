import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl = 'https://stellardev.developmentgoingon.com/public/api/stellar';  // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {

    let header;
    header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    header.append(
      "Access-Control-Allow-Methods",
      "POST, GET, DELETE, PUT,OPTIONS"
    );
    return this.http.post(`${this.apiUrl}/ContactUs`, data, {
      headers: header,
    });


    
  }

  getSeoData(pageName: any){

    let header;
    header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    header.append(
      "Access-Control-Allow-Methods",
      "POST, GET, DELETE, PUT,OPTIONS"
    );
    const params = {
      'pageName' : pageName 
    }
    this.http.get(`${this.apiUrl}/seo/${pageName}`).subscribe((res:any)=>{

      console.log("data ---",res)
      console.log(pageName);

      return res.data;

    },(error)=>{
      console.log("error ---", error);
    });


    
  }
}
