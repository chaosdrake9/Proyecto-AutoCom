import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {Perfil} from './../models/perfil.model';

import {Subject} from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PerfilesService{

    perfiles$: AngularFireList<any>;

    constructor(private db:AngularFireDatabase) {
    }

    public load(){
        return this.db.list('Perfiles');
    }

    public createPerfil(perfil) {
        this.db.database.ref('Perfiles/'+perfil.id).set(perfil);
    }
    
    public getPerfil(id){
          return this.db.object('Perfiless/'+id);
    }
    
    public editPerfil(perfil){
        this.db.database.ref('Perfiles/'+perfil.id).set(perfil);

    }

    public deletePerfil(perfil){
        this.db.database.ref('Perfils/'+perfil.id).remove(perfil);
    }
}