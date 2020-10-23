import { Component, ViewChild } from "@angular/core";
import { SerialModel } from "../models/models/models.model";
import { DataService } from "../services/data.service";
import { NgForm } from "@angular/forms";

@Component( {
                selector: "app-tab2",
                templateUrl: "tab2.page.html",
                styleUrls: [ "tab2.page.scss" ]
            } )
export class Tab2Page {

    serial: SerialModel = { sId: "", sEpisode: 1, sName: "", sSeason: 1, sTime: 0 };
    @ViewChild( "serialForm", { static: false } ) serialForm: NgForm;

    constructor( private ds: DataService ) {}

    addNewSerial(): void {
        this.ds.addNewSerial( this.serial );
        this.reset();
    }

    reset(): void {
        this.serial = { sId: "", sEpisode: 1, sName: "", sSeason: 1, sTime: 0 };
    }
}
