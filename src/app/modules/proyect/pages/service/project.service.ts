import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { encrypt } from 'src/app/utils/encrypt';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private API_SERVER='https://scrumback.azurewebsites.net/project'

  constructor(
    private httpClient:HttpClient,
    private encry: encrypt
  ) { }

  public getAllProyect():Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER+"/all", {headers});
  }
  public saveProyect(proyect:any):Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.post(this.API_SERVER+"/save",proyect, {headers});
  }
  getProyectById(idProyect:string | null):Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get(this.API_SERVER+"/"+idProyect, {headers});
  }
  updateProyect(idProyect:string,dataProyect:any){
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.put(this.API_SERVER+"/"+idProyect,dataProyect, {headers});
  }

  getClient():Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumback.azurewebsites.net/client/all', {headers});
  }

  getArea(): Observable<any>{
    const enToken: any=localStorage.getItem('token')
    const token =''+ this.encry.decryptData(enToken);
    // const token: string | null= ''+localStorage.getItem('token')
    const headers = new HttpHeaders().set("Authorization", token);
    return this.httpClient.get('https://scrumback.azurewebsites.net/area/all', {headers});
  }
}
