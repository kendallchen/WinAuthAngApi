import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    winAccount : string;

    constructor(private acctServ: AccountService) { 
        acctServ.get().subscribe(account => {
            this.winAccount = account;
        });
    }

    ngOnInit() {
    }

}
