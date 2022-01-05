import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarTarefasComponent } from 'src/paginas/cadastrar-tarefas/cadastrar-tarefas.component';
import { EditarTarefasComponent } from 'src/paginas/editar-tarefas/editar-tarefas.component';
import { ListarTarefasComponent } from 'src/paginas/listar-tarefas/listar-tarefas.component';

export const routes: Routes = [
  { path: '', component: ListarTarefasComponent },
  { path: 'editar', component: EditarTarefasComponent },
  { path: 'cadastrar', component: CadastrarTarefasComponent },

  { path: '', 
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})


export class GerenciadorRoutingModule { }
