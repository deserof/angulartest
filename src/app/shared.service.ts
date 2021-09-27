import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://bsite.net/artem01/api";
  readonly Weather="";

  constructor(private http:HttpClient) { }

  getWeatherList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/WeatherForecast');
  }
}
