import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  /* sempre que o construtor for chamado irá iniciar um httpClient.
  O Snackbar foi configurado para o método da mensagem */
  constructor(private http:HttpClient, private _snack: MatSnackBar ) {}

    /* chamamos a url base que está no environment */
    baseUrl: String = environment.baseUrl;

    /* esse é o método que irá receber as categorias. */
    findAll():Observable<Categoria[]>{
      /* url complementar que irá complementar o endpoint de categorias, concatena as duas strings de categoria e a url base. */
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }

    findById(id: String): Observable<Categoria>{
      const url = `${this.baseUrl}/categorias/${id}`
      return this.http.get<Categoria>(url);
    }


  create(categoria: Categoria): Observable<Categoria>{
    const url= `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url, categoria);

  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url)
  }


  update(categoria: Categoria): Observable<void>{
    const url =`${this.baseUrl}/categorias/${categoria.id}`
    return this.http.put<void>(url, categoria)
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }





}
