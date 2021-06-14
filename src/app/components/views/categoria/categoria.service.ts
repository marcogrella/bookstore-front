import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  /* sempre que o construtor for chamado irá iniciar um httpClient*/
  constructor(private http:HttpClient) {}

    /* chamamos a url base que está no environment */
    baseUrl: String = environment.baseUrl;

    /* esse é o método que irá receber as categorias. */
    findAll():Observable<Categoria[]>{
      /* url complementar que irá complementar o endpoint de categorias, concatena as duas strings de categoria e a url base. */
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }

}
