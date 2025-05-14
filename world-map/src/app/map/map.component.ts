import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WorldBankApiService } from '../world-bank-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit {
  allPaths: any;
  countryName: any;
  countryID: any;

  @Output() countryClicked = new EventEmitter<string>();

  constructor(private worldBankApiService: WorldBankApiService) {}
  ngOnInit(): void {
    this.allPaths = document.querySelectorAll('path');

    this.allPaths.forEach((path: any) =>
      path.addEventListener('click', () => {
        this.countryName = path.getAttribute('name');
        this.countryID = path.getAttribute('id');
        this.worldBankApiService.setCountryID(this.countryID);
        this.worldBankApiService.getCountry(this.countryID);
        this.countryClicked.emit(this.countryID);
        console.log(this.countryID);
      })
    );
  }
}
