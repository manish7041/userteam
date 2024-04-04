import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Team } from 'src/app/models/team.model';
import { Users } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private apiUrl: string = 'http://localhost:3000/teams';
  selectedUsers: Users[] = [];
  teams: any = [];
  teamLength: number;

  obs: Subject<any> = new Subject();
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getTeams().subscribe((teamData)=>{
      this.teams = teamData
      this.teamLength = this.teams.length;
    })
  }

 
  getTeams(): Observable<Team> {
    return this.http.get<any>(this.apiUrl);
  }

  addTeams(teamName: string) {
    let t = {
      id: this.teamLength + 1,
      name: teamName,
      members: this.selectedUsers,
    };
    let data = JSON.stringify(t);
    console.log(data);

    this.http.post<any>(this.apiUrl, data).subscribe(
      (res) => {
        console.log(res, 'team created');
      },
      (err) => {
        console.log(err, 'post');
      }
    );
    
  }


  selectUser(u: any) {
    this.selectedUsers.push(u);
    this.obs.next(this.selectedUsers);
  }
}
