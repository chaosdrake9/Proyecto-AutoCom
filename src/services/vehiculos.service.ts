import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {Vehiculo} from './../models/vehiculo.model';

import {Subject} from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehiculosService{

    vehiculos$: AngularFireList<any>;

    constructor(private db:AngularFireDatabase) {
    }

    public load(){
        return this.db.list('Vehiculos');
    }

    public createVehiculo(vehiculo) {
        this.db.database.ref('Vehiculos/'+vehiculo.id).set(vehiculo);
    }
    
    public getVehiculo(id){
          return this.db.object('Vehiculos/'+id);
    }
    
    public editVehiculo(vehiculo){
        this.db.database.ref('Vehiculos/'+vehiculo.id).set(vehiculo);

    }

    public deleteVehiculo(vehiculo){
        this.db.database.ref('Vehiculos/'+vehiculo.id).remove(vehiculo);
    }
}