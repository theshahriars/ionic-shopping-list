import {Injectable} from "@angular/core";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Item} from "../models/item.model";

@Injectable()
export class ItemListService {

    shoppingListRef:AngularFireList<Item>;

    constructor(private db: AngularFireDatabase) {
        this.shoppingListRef = this.db.list<Item>('ionic-shopping-list');
    }

    getItem() {
        return this.shoppingListRef;
    }

    addItem(item: Item) {
        return this.shoppingListRef.push(item);
    }
}