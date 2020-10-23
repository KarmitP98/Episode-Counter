import { Component } from "@angular/core";
import { DataService } from "../services/data.service";
import { SerialModel } from "../models/models/models.model";
import { Observable } from "rxjs";

@Component( {
                selector: "app-tab1",
                templateUrl: "tab1.page.html",
                styleUrls: [ "tab1.page.scss" ]
            } )
export class Tab1Page {

    serials: SerialModel[] = [];
    sub: Observable<SerialModel[]>;

    constructor( private ds: DataService ) {
        this.sub = this.ds.fetchEpisodes().valueChanges();
    }


    update( serial: SerialModel ): void {
        this.ds.updateEpisode( serial );
    }
}
