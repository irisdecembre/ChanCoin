import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.css']
})
export class BlockchainViewerComponent implements OnInit {
  public blocks = [];
  public selectedBlock = null;
  public publicKey = null;
  public balance = null;

  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.getBlock();
    this.selectedBlock = this.blocks[0];
    this.publicKey = blockchainService.walletKeys[0].publicKey;
   }

  ngOnInit(): void {
  }

  showTransactions(block) {
    this.selectedBlock = block;
  }

  getBalanceOfAddress() {
    this.balance = this.blockchainService.blockchainInstance.getBalanceOfAddress(this.publicKey);
  }
}
