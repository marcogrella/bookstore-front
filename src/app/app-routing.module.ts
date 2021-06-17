import { LivroDeleteComponent } from './components/views/livros/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './components/views/livros/livro-update/livro-update.component';
import { LivrCreateComponent } from './components/views/livros/livro-create/livro-create.component';
import { LivroReadAllComponent } from './components/views/livros/livro-read-all/livro-read-all.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent,
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent,
  },
  {
    path: 'categorias/:id_cat/livros',
    component: LivroReadAllComponent,
  },
  {
    path: 'categorias/:id_cat/livros/create',
    component: LivrCreateComponent
  },
  {
    path: 'categorias/:id_cat/livros/:id/update',
    component: LivroUpdateComponent
  },
  {
    path: 'categorias/:id_cat/livros/:id/delete',
    component: LivroDeleteComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
