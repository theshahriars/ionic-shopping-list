import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ItemListService} from "../../services/item-list.service";
import {Observable} from "rxjs/observable";
import {Item} from "../../models/item.model";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    private items$: Observable<Item[]>;

    constructor(public navCtrl: NavController, private itemList: ItemListService) {
        this.items$ = this.itemList
            .getItem()
            .snapshotChanges()
            .map(
                changes => {
                    return changes.map(c => ({
                        key: c.payload.key, ...c.payload.val()
                    }))
                }
            );

        console.log(this.items$);
    }

}
