import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Item} from "../models/item.model";

@Injectable()
export class ItemListService {

    private shoppingListRef = this.db.list<Item>('ionic-shopping-list');

    constructor(private db: AngularFireDatabase) {
    }

    getItem() {
        return this.shoppingListRef;
    }

    addItem(item: Item) {
        return this.shoppingListRef.push(item);
    }
}