import { Component, OnInit } from '@angular/core';
import { Debtor } from './debtor';
import { DebtorService } from './debtor.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {
  private title:string = 'Listado Deudores';
  private debtors: Debtor[];

  constructor(private debtorService: DebtorService) { }

  ngOnInit() {
     this.debtorService.getDebtors().subscribe(
       debtors => this.debtors = debtors
     );
  }
}
