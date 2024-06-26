import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from '../interface/board';
import { Employee } from 'src/app/modules/employees/pages/interface/employee';
import { Team } from 'src/app/modules/teams/pages/interface/team';
import { Tasks } from 'src/app/modules/teams/pages/interface/tasks';
import { UserStory } from 'src/app/modules/userStory/pages/interface/userStory';
import { encrypt } from 'src/app/utils/encrypt';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private API_SERVER = 'https://scrumbackend.azurewebsites.net/board';

  constructor(private httpClient: HttpClient,
                private encry: encrypt) {}

  public getAllBoard(): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER + '/allboards', {headers});
  }

  public saveBoard(board: any): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.post(this.API_SERVER + '/saveboard', board, {headers});
  }



  getUserStoryTeam(teamId: string): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumbackend.azurewebsites.net/userstory/userstoryteam/' + teamId,{headers});
  }

  getTeamArea(areaId: string): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumbackend.azurewebsites.net/team/area/' + areaId, {headers});
  }

  deleteBoard(id: string): Observable<IBoard[]> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.delete<IBoard[]>(this.API_SERVER + '/deleteboard/' + id, {headers});
  }

  updateBoard(idBoard: String, dataBoard: any) {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.put(this.API_SERVER + '/updateboard/' + idBoard,dataBoard,{headers});
  }

  getAllBoardById(idBoard: string | null): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER + '/boardid/' + idBoard, {headers});
  }

  getEmployees(): Observable<Employee> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get<Employee>('https://scrumbackend.azurewebsites.net/employee/all', {headers});
  }

  getAllTeam(): Observable<Team> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get<Team>('https://scrumbackend.azurewebsites.net/team/all', {headers});
  }

  getAllTaskTeam(): Observable<Tasks> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get<Tasks>('https://scrumbackend.azurewebsites.net/taskteam/all', {headers});
  }
  getAllUserStory(): Observable<UserStory> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get<UserStory>('https://scrumbackend.azurewebsites.net/userstory/userstory/all',  {headers} );
  }

  getBoardByAreaIdTeamIdUserStoryId(areaId: string, teamId: string, userStoryId: string): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER + '/boardFilter/'+ areaId+ '/' + teamId +'/'+ userStoryId,  {headers});
  }
}
