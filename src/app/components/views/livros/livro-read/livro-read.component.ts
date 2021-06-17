import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

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
   this.livro.id = this.route.snapshot.paramMap.get("id")!;
   this.findById();

 }

  findById(): void{
    this.service.findById(this.livro.id!).subscribe((resposta) =>{
      this.livro = resposta
  })
}


 cancel(): void{
   this.router.navigate([`categorias/${this.id_cat}/livros`]);
 }



}
