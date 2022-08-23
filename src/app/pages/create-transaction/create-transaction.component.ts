import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'MyCoin/src/blockchain';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  public newTx = null;
  public walletKey = null;
  public balance = null;

  constructor(private blockChainService: BlockchainService) {
    this.walletKey = this.blockChainService.walletKeys[0];
  }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);
    this.blockChainService.addTransaction(this.newTx);
    this.newTx = new Transaction();
  }

  getBalanceOfAddress() {
    this.balance = this.blockChainService.blockchainInstance.getBalanceOfAddress(this.walletKey.publicKey);
  }
}
