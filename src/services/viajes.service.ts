import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {Viaje} from './../models/viaje.model';

import {Subject} from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ViajesService{

    viajes$: AngularFireList<any>;

    constructor(private db:AngularFireDatabase) {
    }

    public load(){
        return this.db.list('Viajes');
    }

    public createViaje(viaje) {
        this.db.database.ref('Viajes/'+viaje.id).set(viaje);
    }
    
    public getViaje(id){
          return this.db.object('Viajes/'+id);
    }
    
    public editViaje(viaje){
        this.db.database.ref('Viajes/'+viaje.id).set(viaje);

    }

    public deleteViaje(viaje){
        this.db.database.ref('Viajes/'+viaje.id).remove(viaje);
    }
}