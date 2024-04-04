import { Component, EventEmitter, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FilterService } from '../../services/filterservice.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  selectedGender: string = ''; // Property to store selected gender filter
  selectedDomain: string = ''; // Property to store selected domain filter
  selectedAvailability: string = ''; // Property to store selected availability filter
  genders: string[] = []; //All gender filter
  domains: string[] = []; //All domains filter

  //dependency injection of dependent services
  filterService: FilterService = inject(FilterService);
  userService: UserService = inject(UserService);

  ngOnInit() {
    //adding all filter data to its particular field
    this.userService.getUsers().subscribe((res) => {
      let domain = [];
      let gender = [];
      res.forEach((element) => {
        domain.push(element.domain);
        gender.push(element.gender);
      });

      //storing all unique values form the users data to filters fields
      this.domains = [...new Set(domain)];
      this.genders = [...new Set(gender)];
    });
    this.emitFilterEvent()
  }

  // Method to apply gender filter
  applyGenderFilter() {
    this.emitFilterEvent();
  }

  // Method to apply domain filter
  applyDomainFilter() {
    this.emitFilterEvent();
  }

  // Method to apply availability filter
  applyAvailabilityFilter() {
    this.emitFilterEvent();
  }

  // Method to emit filter criteria to parent component
  emitFilterEvent() {
    const filters = {
      gender: this.selectedGender,
      domain: this.selectedDomain,
      availability: this.selectedAvailability, // Convert availability string to boolean
    };
    this.filterService.applyFilter(filters);
  }
}
