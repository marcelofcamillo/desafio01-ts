export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Você depositou R$ ${value.toFixed(2)}`);
      //this.getBalance();
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= value) {
        this.balance -= value;
        console.log(`Você sacou R$ ${value.toFixed(2)}`);
        //this.getBalance();
      } else {
        throw new Error('Saldo insuficiente!');
      }
    }
  };

  getBalance = (): void => {
    console.log(`Saldo atual R$ ${this.balance.toFixed(2)}`);
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida!');
  };
}
