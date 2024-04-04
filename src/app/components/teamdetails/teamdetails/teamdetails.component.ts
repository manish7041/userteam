import { Component, Input } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css'],
})
export class TeamdetailsComponent {
  @Input() team: Team[];

  constructor(private teamService: TeamsService) {}
}
