import { Injectable } from '@angular/core';
import { Tarefas } from '../../shared'


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //Listar as tarefas que são amarzenados pelo localStorage e convertidos para o formato Json com parse
  listarTodos(): Tarefas[] {
  	const tarefas = localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : [];
  }

  //Responsável por cadastrar uma nova tarefa na aplicação
  cadastrar(tarefa: Tarefas): void {
  	const tarefas = this.listarTodos();
  	tarefa.id = new Date().getTime();
  	tarefas.push(tarefa);
  	localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  //Para obter uma tarefa 
  buscarPorId(id: number): Tarefas {
    const tarefas: Tarefas[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }
}
