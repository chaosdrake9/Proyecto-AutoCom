import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {Sincronizacion} from './../models/sincronizacion.model';

import {Subject} from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SincronizacionesService{

    sincronizaciones$: AngularFireList<any>;

    constructor(private db:AngularFireDatabase) {
    }

    public load(){
        return this.db.list('Sincronizaciones');
    }

    public createSincronizacion(sincronizacion) {
        this.db.database.ref('Sincronizaciones/'+sincronizacion.id).set(sincronizacion);
    }
    
    public getSincronizacion(id){
          return this.db.object('Sincronizaciones/'+id);
    }
    
    public editSincronizacion(sincronizacion){
        this.db.database.ref('Sincronizaciones/'+sincronizacion.id).set(sincronizacion);

    }

    public deleteSincronizacion(sincronizacion){
        this.db.database.ref('Sincronizaciones/'+sincronizacion.id).remove(sincronizacion);
    }
}