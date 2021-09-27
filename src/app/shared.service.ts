import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://192.168.0.111:5001/api";
  readonly Weather="";

  constructor(private http:HttpClient) { }

  getWeatherList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/WeatherForecast');
  }
}
