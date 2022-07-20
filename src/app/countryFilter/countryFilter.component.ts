import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'country-filter',
  templateUrl: './countryFilter.component.html',
  styleUrls: ['./countryFilter.component.scss']
})

export class CountryFilter implements OnInit {
  @Input() countryList: string[];
  filteredCountries: string[] = []

  ngOnInit() {
    this.filteredCountries = this.countryList.slice()
  }

  filter(event) {
    const searchText = event.target.value;
    if (searchText.length > 0) {
      this.filteredCountries = this.countryList.slice().filter(x => x.toLowerCase().includes(searchText.toLowerCase()))
    } else {
      this.filteredCountries = this.countryList.slice()
    }
  }
}
