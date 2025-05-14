import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { WorldBankApiService } from './world-bank-api.service';
import { CountryInfoComponent } from './country-info/country-info.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, CountryInfoComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Interactive World Map';
  countryID: string = '';
  countryData: any;

  ngOnInit(): void {}

  setCountryID(countryID: string): void {
    this.countryID = countryID;
  }
}
