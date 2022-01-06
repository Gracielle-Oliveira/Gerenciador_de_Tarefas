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

  //Procura entre os id's cadastrados para ser atualizado 
  atualizar(tarefa: Tarefas): void {
    const tarefas: Tarefas[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  //Remove pelo id indicado, utiliza o let pq preciso modificar a tarefa na linha 46;
  //Utilizando o filter para que ele busque pela condição que lhe foi atribui para ele;
  remover(id: number): void {
    let tarefas: Tarefas[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  //alterar de true para false 
  alterarStatus(id: number): void {
    const tarefas: Tarefas[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
