import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'country-filter',
  templateUrl: './countryFilter.component.html',
  styleUrls: ['./countryFilter.component.scss']
})

export class CountryFilter implements OnInit {
  @Input() countryList: string[];
  filteredCountries: Array<String> = []
  searchText = ""
  ngOnInit() {
    this.filteredCountries = this.countryList
  }

  filter() {
    if (this.searchText.length > 0) {
      this.filteredCountries = this.countryList.filter(x => x.toLowerCase().includes(this.searchText.toLowerCase()))
    } else {
      this.filteredCountries = this.countryList
    }
  }
}
