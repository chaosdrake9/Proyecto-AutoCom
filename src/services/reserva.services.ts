import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {Reserva} from './../models/reserva.model';

import {Subject} from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class reservaesService{

    reservaes$: AngularFireList<any>;

    constructor(private db:AngularFireDatabase) {
    }

    public load(){
        return this.db.list('reserva');
    }

    public createreserva(reserva) {
        this.db.database.ref('reserva/'+reserva.id).set(reserva);
    }
    
    public getreserva(id){
          return this.db.object('reserva/'+id);
    }
    
    public editreserva(reserva){
        this.db.database.ref('reserva/'+reserva.id).set(reserva);

    }

    public deletereserva(reserva){
        this.db.database.ref('reserva/'+reserva.id).remove(reserva);
    }
}