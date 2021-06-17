import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {
 /* validação do campo via front-end */

 titulo = new FormControl("", [Validators.minLength(3)]);
 nome_autor = new FormControl("", [Validators.minLength(3)]);
 texto = new FormControl("", [Validators.minLength(10)]);

 id_cat: String = "";

 /* ngModel dos campos pega os valores do html : */
 livro: Livro = {
     id:  "",
     titulo:  "",
     nome_autor:  "",
     texto:  ""
 }

 constructor(
   private service: LivroService,
   private route: ActivatedRoute,
   private router: Router ) { } // o activate route autiliza-se para pegar o id


 ngOnInit(): void {
   this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
   /* esse id que já pegamos da url e declaramos como um valor no atributo id */
   this.livro.id = this.route.snapshot.paramMap.get("id")!;
   /* chamar o método findById e já renderiza */
   this.findById();

 }

  findById(): void{
    this.service.findById(this.livro.id!).subscribe((resposta) =>{
      this.livro = resposta
  })
}

update(): void {
  this.service.update(this.livro).subscribe((resposta) => {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
    this.service.mensagem('Livro atualizado com sucesso!')
  }, err =>{
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
    this.service.mensagem('Falha ao atualizar livro.');
  })
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
     return 'O campo Texto deve conter entre 10 e 200000 caractéres.';
   }

   return false;
 }

}
