import { DioAccount } from './DioAccount';

export class NewAccount extends DioAccount {
  deposit = (value: number): void => {
    value += value * 0.1;
    console.log(`Você depositou R$ ${value.toFixed(2)}`);
    this.balance += value;
  };
}
