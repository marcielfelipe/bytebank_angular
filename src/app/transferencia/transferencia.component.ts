import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss'],
})
export class TransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>()

  valor?: number
  destino?: number

  transferir() {
    this.aoTransferir.emit({valor:this.valor, destino:this.destino});
    this.limparCampos()
  }
  limparCampos(){
    this.valor = 0
    this.destino= 0
  }
}
