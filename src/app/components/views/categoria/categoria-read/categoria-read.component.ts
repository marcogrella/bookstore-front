import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[] = []

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];


  /* toda a vez que essa classe for chamada irá instanciar um service de categoria*/
  constructor(private service:CategoriaService) { }

  /* já chama o método ao instanciar a classe */
  ngOnInit(): void {
    this.findAll();
  }

  /* esse método chama o serviço que tem o método findAll */
  findAll(){

    /* a resposta é recebida colocada dentro do array vazio (categorias). Esse é o dataSource chamado na página html.  */
    this.service.findAll().subscribe(resposta => {
      this.categorias = resposta;
    })
  }


}
