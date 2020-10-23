import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { SerialModel } from "../models/models/models.model";

@Injectable( {
                 providedIn: "root"
             } )
export class DataService {

    constructor( private afs: AngularFirestore ) { }

    public fetchEpisodes() {
        return this.afs.collection<SerialModel>( "serials" );
    }

    public updateEpisode( serial: SerialModel ) {
        this.afs.collection( "serials" )
            .doc( serial.sId )
            .update( serial );
    }

    addNewSerial( serial: SerialModel ): boolean {
        serial.sId = this.afs.createId();
        var res = false;
        this.afs.collection( "serials" )
            .doc( serial.sId )
            .set( serial )
            .then( () => {res = true;} )
            .catch( () => {res = false;} );

        return res;

    }
}
