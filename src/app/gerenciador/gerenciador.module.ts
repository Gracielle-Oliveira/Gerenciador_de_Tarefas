import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GerenciadorRoutingModule } from '../gerenciador/gerenciador-routing.module';

import { CadastrarTarefasComponent } from '../paginas/cadastrar-tarefas/cadastrar-tarefas.component';
import { ListarTarefasComponent } from '../paginas/listar-tarefas/listar-tarefas.component';
import { EditarTarefasComponent } from '../paginas/editar-tarefas/editar-tarefas.component';
import { StorageService } from '../service';
import { TarefasService } from '../service';




@NgModule({
  declarations: [
    CadastrarTarefasComponent,
    ListarTarefasComponent,
    EditarTarefasComponent
  ],
  imports: [
    CommonModule,
    GerenciadorRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers:  [
    TarefasService,
    StorageService
  ]
})
export class GerenciadorModule { }
