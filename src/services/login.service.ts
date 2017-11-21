import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {Login} from './../models/login.model';

import {Subject} from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class loginesService{

    logines$: AngularFireList<any>;

    constructor(private db:AngularFireDatabase) {
    }

    public load(){
        return this.db.list('login');
    }

    public createlogin(login) {
        this.db.database.ref('login/'+login.id).set(login);
    }
    
    public getlogin(id){
          return this.db.object('login/'+id);
    }
    
    public editlogin(login){
        this.db.database.ref('login/'+login.id).set(login);

    }

    public deletelogin(login){
        this.db.database.ref('logins/'+login.id).remove(login);
    }
}