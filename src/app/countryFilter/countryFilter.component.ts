import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'country-filter',
  templateUrl: './countryFilter.component.html',
  styleUrls: ['./countryFilter.component.scss']
})

export class CountryFilter implements OnInit {
  @Input() countryList: string[];
  filteredCountries: string[] = []
  searchText = ""
  ngOnInit() {
    this.filteredCountries = this.countryList
  }

  filter() {
    const searchText = this.searchText;
    if (searchText.length > 0) {
      this.filteredCountries = this.countryList.filter(x => x.toLowerCase().includes(searchText.toLowerCase()))
    } else {
      this.filteredCountries = this.countryList
    }
  }
}
