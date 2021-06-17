import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivrCreateComponent implements OnInit {

  /* validação do campo via front-end */
  titulo = new FormControl("", [Validators.minLength(3)]);
  nome_autor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  id_cat: String = ''

  /* ngModel dos campos pega os valores do html : */
  livro: Livro = {
      id: '',
      titulo: '',
      nome_autor: '',
      texto: ''
  }

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router ) { } // o activate route autiliza-se para pegar o id

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')! /* exclamação evita que erro de valor null seja ignorado. */

  }

  create(): void{
      this.service.create(this.livro, this.id_cat).subscribe((resposta) =>{
          this.router.navigate([`categorias/${this.id_cat}/livros`]);
          this.service.mensagem("Livro criado com sucesso!");
        }, err => {
          this.router.navigate([`categorias/${this.id_cat}/livros`]);
          this.service.mensagem("Houve um erro na criação do livro. Tente novamente!");
        } )
  }

  cancel(): void{
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  /* mensagem para validação de campos */
  getMessage() {
    if (this.titulo.invalid){
      return 'O campo TÍTULO deve conter entre 3 e 100 caractéres.';
    }

    if (this.nome_autor.invalid){
      return 'O campo NOME DO AUTOR deve conter entre 3 e 100 caractéres.';
    }

    if (this.texto.invalid){
      return 'O campo TEXTO deve conter entre 10 e 200000 caractéres.';
    }

    return false;
  }

}
