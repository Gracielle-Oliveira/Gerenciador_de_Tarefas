import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/service';
import { Tarefas } from '../../shared';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.scss']
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  public tarefa: Tarefas;
  public id: string

  constructor(
    private service: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.service.buscarPorId(id)
    console.log(this.tarefa);
    
  }

  atualizar(): void{
    if (this.formTarefa.form.valid){
      this.service.atualizar(this.tarefa);
      this.router.navigate(['/'])
    }
  }

}
