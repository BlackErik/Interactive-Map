import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WorldBankApiService } from '../world-bank-api.service';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css',
})
export class CountryInfoComponent implements OnChanges {
  @Input() countryID: string = '';
  countryData: any;
  countryName: string = '';
  countryCapital: string = '';
  countryRegion: string = '';
  countryIncome: string = '';
  countryLatitude: string = '';
  countryLongitude: string = '';

  constructor(private worldBankApiService: WorldBankApiService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.getCountry(this.countryID);
  }

  getCountry(countryID: string): void {
    if (countryID) {
      this.worldBankApiService.getCountry(countryID).subscribe((data) => {
        this.countryData = data[1][0];
        console.log(this.countryData.name);
        this.countryName = this.countryData.name;
        this.countryCapital = this.countryData.capitalCity;
        this.countryRegion = this.countryData.region.value;
        this.countryIncome = this.countryData.incomeLevel.value;
        this.countryLatitude = this.countryData.latitude;
        this.countryLongitude = this.countryData.longitude;
      });
    }
  }
}
