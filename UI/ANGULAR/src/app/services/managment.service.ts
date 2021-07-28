import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagmentService {
  readonly BaseApiUrl = "https://localhost:44347/api"
  constructor(private http: HttpClient) { }

  obtenerEdificios(): Observable<any[]>{
    return this.http.get<any>(`${this.BaseApiUrl}/Edificios`);
  }

  añadirEdificio(edificio: any){
    return this.http.post(`${this.BaseApiUrl}/Edificios`, edificio)
  }

  actualizarEdificio(id: any){
    return this.http.put(`${this.BaseApiUrl}/Edificios`, id)
  }

  eliminarEdificio(id: any){
    return this.http.delete(`${this.BaseApiUrl}/Edificios/`+ id);
  }
}