import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service';
import { Tarefas } from 'src/app/shared';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.scss']
})
export class CadastrarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  
  tarefa: Tarefas;

  constructor(
    private service: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefas();
  }

  cadastrar(): void{
    if(this.formTarefa.form.valid) {
      this.service.cadastrar(this.tarefa);
      this.router.navigate(["/"]);
    }
  }

}
