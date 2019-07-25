import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  piadaSelecionada: any;
  url = "/assets/trocadilhos.json";
  constructor(private http: HttpClient) { }

  getAllJokes() {
    return this.http.get<any[]>(this.url);
  }
}
