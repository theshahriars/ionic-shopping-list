import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Item} from "../../models/item/item.model";

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

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddItemPage');
    }

}
