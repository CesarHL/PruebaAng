import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Debtor } from '../debtor';
import { DebtorService } from '../debtor.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private debtor:Debtor = new Debtor();

  constructor(private debtorService: DebtorService,
  private router: Router) { }

  ngOnInit() {
  }

  public create(): void {
    this.debtorService.createDebtor(this.debtor)
      .subscribe(debtor => {
         this.router.navigate(['/debtors']);
         swal('New Debtor added', 'Debtor ${debtor.name}', 'success');
       }
    )
  }

}
