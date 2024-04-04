import { Injectable, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user.model';
import { UserService } from './user.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService implements OnInit{
  constructor(private service: UserService) {}

  searchTerm: string = '';
  filteredUsers: Users[] = [];
  filters: any = {};
  users: Users[] = [];

  dataObservable: Subject<Users[]> = new Subject();
 ngOnInit(){

 }

  getdata() {
    //fetching user 
    this.service.getUsers().subscribe((res) => {
      this.users = res;
      this.filteredUsers = this.users;
      //emmiting the user data
      this.dataObservable.next(this.filteredUsers);
    });
  }

  // Method to perform search based on the search term
  performSearch(searchTerm: string) {
    
    // Convert search term to lowercase for case-insensitive search
    this.searchTerm = searchTerm.toLowerCase();
    // console.log(searchTerm);
    this.applyFilters(); // Apply existing filters along with search filter
  }

  // Method to apply filters based on filter criteria
  applyFilter(filters: any) {
    this.filters = filters;
    console.log(filters);

    // Check if  filters availibility  is not empty string
    if (filters.availability !== '') {
      this.filters.availability = JSON.parse(this.filters.availability);
    }

    this.applyFilters();
  }

  applyFilters() {
    
    // Filter the entire user list based on search term and filter criteria
    this.filteredUsers = this.users.filter((user) => {
      let matchesSearch = true;
      let matchesFilters = true;

      if (this.searchTerm.length > 0) {
        matchesSearch = user.first_name
          .toLowerCase()
          .startsWith(this.searchTerm);
          console.log('searterm filterss');

      }


      // Check if user's gender matches filter criteria
      if (this.filters.gender && user.gender !== this.filters.gender) {
        matchesFilters = false;
      }

      // Check if user's domain matches filter criteria
      if (this.filters.domain && user.domain !== this.filters.domain) {
        matchesFilters = false;
      }

      // Check if user's availability matches filter criteria
      if (
        this.filters.availability !== '' &&
        user.available !== this.filters.availability
      ) {
        matchesFilters = false;
      }

      return matchesSearch && matchesFilters;
    });

    //emmiting the filter users  data
    this.dataObservable.next(this.filteredUsers);
  }
}
