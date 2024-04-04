import { Component, inject } from '@angular/core';
import { Users } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
import { Team } from 'src/app/models/team.model';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  teams: any = [];
  teamName: string;
  isMemberListVisible: boolean = false;
  showMemberVisible: boolean = false;
  selectedMember?: Users;

 constructor(){}
  teamsService: TeamsService = inject(TeamsService);

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    this.teamsService.getTeams().subscribe((res) => {
      console.log(res);

      this.teams = res;
      
    });
  }

  toggleMemberList(team: any) {
    team.isMemberListVisible = !team.isMemberListVisible;
    // Close other team lists
    this.teams.forEach((t) => {
      if (t !== team) {
        t.isMemberListVisible = false;
      }
    });
  }

  showDetail(member: any) {
    this.selectedMember = undefined;

    this.selectedMember = member;
    console.log(member);

    this.showMemberVisible = true;
  }

  hideDetail() {
    this.showMemberVisible = false;
  }
}
