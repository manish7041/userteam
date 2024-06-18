import { Component, OnInit, inject } from '@angular/core';

import { UserService } from '../../services/user.service';
import { Users } from 'src/app/models/user.model';
import { FilterService } from '../../services/filterservice.service';
import { TeamsService } from '../../services/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  users: Users[] = [];
  selectedUsers: Users[] = [];
  currentPage: number = 1;
  pageSize: number = 20;
  createCheck: boolean = false;
  teamService: TeamsService = inject(TeamsService);
  popUp: boolean = false;
  TeamName: string = '';
  createCondirion: boolean = false;
  router: Router = inject(Router);
  constructor(
    private filterService: FilterService,
    private user: UserService
  ) {}

  ngOnInit() {
    this.filterService.getdata();
    // Fetch users from UserService
    let ab = this.filterService.dataObservable.subscribe((res) => {
      this.users = res;
      console.log(res);
      
    });
    this.selectedUsers = this.teamService.selectedUsers;
  }

  //Method for pagechange
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  //Method for enabling users for selection of teams
  selectTeam(): void {
    this.createCheck = !this.createCheck;
  }

  createTeam(): void {
    this.popUp = true;
    let unsb = this.teamService.obs.subscribe((res) => {
      this.selectedUsers = res;
      console.log(res);
    });

    unsb.unsubscribe();
  }
  closePopup() {
    this.popUp = false; 
  }
  addTeam() {
    if (this.TeamName == '') {
      alert('team name is required');
    } else {
      this.teamService.addTeams(this.TeamName);
      this.teamService.selectedUsers = [];
      this.router.navigate(['/Team']);
      this.popUp = false;
    }
  }
}
