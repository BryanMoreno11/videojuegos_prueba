import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) {
   }

   //la ruta
   API_URL= "http://localhost:3000/api/";
  //Métodos

  getFranquicias(){
    return this.http.get (`${this.API_URL}franquicia`);
  }

  getFranquicia(id:string|number){
    return this.http.get(`${this.API_URL}franquicia/${id}`);
  }

  insertFranquicia(franquicia:Franquicia){
    return this.http.post(`${this.API_URL}franquicia`,franquicia);
  }

  updateFranquicia(id:string | number, franquicia:Franquicia){
    return this.http.put(`${this.API_URL}franquicia/${id}`,franquicia);
  }

  deleteFranquicia(id:string | number){
    return this.http.delete(`${this.API_URL}franquicia/${id}`);
  }



}

export interface Franquicia{
  id_franquicia:number;
  nombre_franquicia:string;

}
