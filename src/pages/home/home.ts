import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestePage } from "../teste/teste";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }



  setPag(pagina: number) {

    var pag: string

    switch (pagina) {

      case 1:
        pag = "TestePage";
        break;

      case 2:

        break;
    }

    this.navCtrl.push(pag);
  }

}
