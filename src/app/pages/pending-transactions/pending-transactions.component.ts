import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.css']
})
export class PendingTransactionsComponent implements OnInit {
  public pendingTransactions = [] as any;

  constructor(private blockchainService: BlockchainService, private router: Router, private route: ActivatedRoute) {
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit(): void {
  }

  minePendingTransactions() {
    this.blockchainService.minePendingTransactions();
    this.router.navigate(['/']);
  }
}
