import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from '../../services/movimentacao.service';

@Component({
  selector: 'bankline-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {

  correntistas:any;
  correntista:any;


  dataHora:any;
  descricao:any;
  valor:any;
  tipo:any

  constructor(private movimentacaoService: MovimentacaoService, private correntistaService: CorrentistaService ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }


  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    console.log(this.correntistas)
    const movimentacao = {
      descricao:this.descricao,
      valor:this.valor,
      tipo:this.tipo,
      idConta:this.correntista.id,
    }

      console.log(movimentacao);
      this.movimentacaoService.create(movimentacao)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });


  }



}
