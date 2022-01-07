import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/service';
import { Tarefas } from 'src/app/shared';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.scss']
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefas;

  constructor(
    private service: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.service.buscarPorId(id)
    console.log('AIDI',id);
    
  }

  atualizar(): void{
    if (this.formTarefa.form.valid){
      this.service.atualizar(this.tarefa);
      this.router.navigate(['/'])
    }
  }

}
