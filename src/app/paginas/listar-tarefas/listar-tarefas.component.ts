import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service';
import { Tarefas } from '../../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {
  
  tarefas: Tarefas[];

  constructor( private service: StorageService) { }

  ngOnInit(): void {
  	this.tarefas = this.listarTodos();
    console.log(this.listarTodos());
    this.tarefas = [
      new Tarefas(1, "Tarefa 1", false),
      new Tarefas(2, "Tarefa 2", true)
    ]
    
  }

  listarTodos(): Tarefas[] {
  	return this.service.listarTodos();
  }

  remover(event: any, tarefa: Tarefas): void {
    event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.service.remover(tarefa.id);
      this.tarefas = this.service.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefas): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.service.alterarStatus(tarefa.id);
      this.tarefas = this.service.listarTodos();
    }
  }


}
