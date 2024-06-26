import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { encrypt } from 'src/app/utils/encrypt';

@Injectable({
  providedIn: 'root',
})
export class SprintsService {
  private API_SERVER = 'https://scrumbackend.azurewebsites.net/sprint';

  constructor(private httpClient: HttpClient,
              private encry: encrypt) {}

  public getAllASprint(): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER + '/all', {headers});
  }

  public saveSprint(sprint: any): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.post(this.API_SERVER + '/savesprint', sprint, {headers});
  }
  
  getSprintById(sprintId: String | null): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER + '/sprint/' + sprintId, {headers});
  }

  getTeamArea(areaId: string): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumbackend.azurewebsites.net/team/area/' + areaId, {headers});
  }

  saveCalculationSprintPoints(dataPointsSprint: any): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.post('https://scrumbackend.azurewebsites.net/sprintEmployee/savesprintemployee',dataPointsSprint, {headers});
  }

  getAllCalculationPercentageEmployee(): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER + '/sprint/employee/all',{headers});
  }


  getAllEmployeesExistOnTeamBySprintId(teamId: string | null ): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumbackend.azurewebsites.net/sprintEmployee/employeeteam/'+ teamId, {headers} );
  }


  getSprintEmployeeByTeamAndSprint(sprintId: string | null, teamId: string | null): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumbackend.azurewebsites.net/sprintEmployee/employeeteam/' + sprintId +"/"+ teamId, {headers});
  }

  getAllEmployeeSprint(sprintEmployeeId: string | null, sprintId: string | null): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumbackend.azurewebsites.net/sprintEmployee/sprintemployee/' + sprintEmployeeId +'/'+ sprintId, {headers});
  }

  updateEmployeeSprint(sprintEmployeeId: string | null, sprintId: any, dataEmployeSprint: any): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    console.log(dataEmployeSprint)
    return this.httpClient.put('https://scrumbackend.azurewebsites.net/sprintEmployee/updatesprintemployee/' + sprintEmployeeId +'/'+sprintId, dataEmployeSprint, {headers});
  }
  scoreUserStory(sprintId: string | null, dataUserStory: any): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.put(this.API_SERVER + '/' + sprintId, dataUserStory, {headers});
  }
  getAllDatesSprint(sprintId: string | null): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
     return this.httpClient.get('https://scrumbackend.azurewebsites.net/sprintday/sprint/' + sprintId, {headers});
  }

  public updateScoreSprint(sprintId: string | null, dataScoreSpring: any): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.put('https://scrumbackend.azurewebsites.net/scoringSpring/update_score/' + sprintId, dataScoreSpring, {headers});
  }

  public getSprintDateById(sprintId: String | null): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER + '/sprintData/'+sprintId , {headers});
  }

  public getUseStoryRef(teamId: String | null, areaId: String | null): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumbackend.azurewebsites.net/userstory/userstoryteam/'+teamId+'/'+areaId , {headers});
  }

  public addUserStoryToSprint(dataSprintUserStory: any): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.post('https://scrumbackend.azurewebsites.net/sprintuserstory/savesprintuserstory',dataSprintUserStory, {headers});
  }

  public getUseStoryDes(sprintId: String | null): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumbackend.azurewebsites.net/sprintuserstory/sprintuserstory/'+ sprintId, {headers});
  }

  public updateSprintUserstory(sprintId: String | null, userstoryId: String | null, dataSprintUserstory: any): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.put('https://scrumbackend.azurewebsites.net/sprintuserstory/updatesprintuserstory/' + sprintId +'/'+userstoryId, dataSprintUserstory, {headers});
  }

  public deleteSprintUserstory(sprintId: String | null, userstoryId: String | null): Observable<any> {
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    //arreglar ruta
    return this.httpClient.delete('https://scrumbackend.azurewebsites.net/sprintuserstory/deletesprintuserstory/' + sprintId +'/'+userstoryId, {headers});
  }

  public updateSprint(sprintId: string | null, data: any): Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.put('https://scrumbackend.azurewebsites.net/sprint/updatesprint/' + sprintId , data, {headers});
  }

   public getSprintByTeam(teamId: String | null): Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumbackend.azurewebsites.net/sprint/sprinteam/' + teamId , {headers});

   }
}