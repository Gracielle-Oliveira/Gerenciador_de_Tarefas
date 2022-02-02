import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarTarefasComponent } from '../paginas';
import { EditarTarefasComponent } from '../paginas';
import { ListarTarefasComponent } from '../paginas';

export const routes: Routes = [
  { path: '', component: ListarTarefasComponent },
  { path: 'editar/:id', component: EditarTarefasComponent },
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
