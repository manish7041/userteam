import { Component, Input, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user.model';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css'],
})
export class UsercardComponent implements DoCheck, OnInit {
  constructor(private teamService: TeamsService) {}
  teamName: string;
  data: any;
  domainIsDuplicate = false;
  userIsDuplicate = false;
  selectedUsers: Users[];

  @Input() user: any;
  @Input() conditionToCreateTeam: boolean;
  ngOnInit() {
    this.data = this.user;
    this.getData();
  }
  ngDoCheck() {
    // console.log(this.teamService.selectedUsers);
    this.getData();
    this.data = this.user;

  }
  getData() {
    this.selectedUsers = this.teamService.selectedUsers;
  }

  selectUser(user: any) {
    console.log('one', user);

    this.teamService.selectedUsers.forEach((existingUser, index) => {
      if (existingUser.domain === user.domain && user !== existingUser) {
        this.domainIsDuplicate = true;
        console.log('domain');
        alert(`User already exists in team with this domain: ${user.domain}`);
        return;
      }
      if (existingUser === user) {
        this.userIsDuplicate = true;
        console.log('splice');

        this.teamService.selectedUsers.splice(index, 1);

        this.data = this.user;
      }
      return;
    });
    if (!this.domainIsDuplicate && !this.userIsDuplicate && user.available) {
      console.log('push');
      console.log(user);

      this.teamService.selectedUsers.push(user);
    } else if (!user.available) {
      alert('User availability is set to no, not adding.');
    }
    console.log(this.teamService.selectedUsers, this.selectedUsers);
  }
}
