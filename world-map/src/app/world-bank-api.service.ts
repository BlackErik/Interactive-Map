import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorldBankApiService {
  countryID: any;
  countryData: any;
  constructor(private http: HttpClient) {}

  // constructor() {}

  setCountryID(id: string) {
    console.log('world-bank-services setting id to : ', id);
    this.countryID = id;
    this.countryData = this.getCountry(this.countryID);
    console.log(this.countryData);
  }

  getCountry(countryID: string): Observable<any> {
    const url = `http://api.worldbank.org/v2/country/${countryID}?format=json`;
    return this.http.get(url);
  }

  getCountryID(): Observable<any> {
    return of(this.countryID);
  }
}
