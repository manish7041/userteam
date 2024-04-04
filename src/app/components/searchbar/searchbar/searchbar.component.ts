import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { UserService } from '../../services/user.service';
import { FilterService } from '../../services/filterservice.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchTerm: string = '';

filterService: FilterService = inject(FilterService);

 
  performSearch() {
  // Emit the search term
    this.filterService.performSearch(this.searchTerm);
  }
}
