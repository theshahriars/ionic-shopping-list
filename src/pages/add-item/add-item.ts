import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Item} from "../../models/item.model";
import {ItemListService} from "../../services/item-list.service";

@IonicPage()
@Component({
    selector: 'page-add-item',
    templateUrl: 'add-item.html',
})
export class AddItemPage {

    item: Item = {
        name: '',
        price: '',
        quantity: ''
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private itemList: ItemListService
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddItemPage');
    }

    addItem(item: Item) {
        this.itemList.addItem(item).then(res => {
            console.log(res.key);
        });
    }

}
