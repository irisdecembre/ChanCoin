import { Injectable } from '@angular/core';
import { Blockchain } from 'MyCoin/src/blockchain';
import * as EC from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();

  public walletKeys = [] as any;

  constructor() {
    this.blockchainInstance.difficulty = 2;
    this.blockchainInstance.minePendingTransactions('04f548f1b1d156bfaee95966291c0412e0c74c1f05c7855d75c4579688680eba2532850ec48422927769a5ec69ddf90255a9a995846d316d7c915bea5ad59f47b7');
    this.generateWalletKeys();
  }

  getBlock() {
    return this.blockchainInstance.chain;
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransaction;
  }

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(this.walletKeys[0].publicKey);
  }

  private generateWalletKeys() {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });
  }
}
