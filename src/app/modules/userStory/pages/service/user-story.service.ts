import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UserStory, UserStoryToTeam} from '../interface/userStory';
import { encrypt } from 'src/app/utils/encrypt';

@Injectable({
  providedIn: 'root'
})
export class userStoryService {

  private API_SERVER  ="https://scrumbackend.azurewebsites.net/subproject";

  constructor(private httpClient: HttpClient,
              private encry: encrypt) { }

  public getAllSubprojects():Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER+"/all", {headers});
  }

  public getAllUser_story():Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get("https://scrumbackend.azurewebsites.net/userstory/userstory/all", {headers});
  }

  public saveUser_story(user_story:any):Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.post("https://scrumbackend.azurewebsites.net/userstory/save",user_story, {headers});
  }

  getUserStoryById(id:string | null):Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get("https://scrumbackend.azurewebsites.net/userstory/"+id, {headers});
  }

  updateUserStory(id:string,dataUserStory:any){
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.put("https://scrumbackend.azurewebsites.net/userstory/"+id,dataUserStory, {headers});
  }

  public getAllUserStoryToSubproject(subProjectId: string | null):Observable<UserStory>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get<UserStory>(this.API_SERVER+"/subproject/"+subProjectId, {headers})
  }

  public getUserStorySubproject(subProjectId: string):Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get("https://scrumbackend.azurewebsites.net/userstory/subproject/" + subProjectId, {headers})
  }

  public getUserStoryToTeam(teamId: string): Observable<UserStoryToTeam[]>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get<UserStoryToTeam[]>('https://scrumbackend.azurewebsites.net/userstory/userstoryteam/'+teamId, {headers})
  }


}
