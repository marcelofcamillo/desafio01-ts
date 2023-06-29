import { CompanyAccount } from './class/CompanyAccount';
import { NewAccount } from './class/NewAccount';
import { PeopleAccount } from './class/PeopleAccount';

console.log('******* PEOPLE ACCOUNT *******');
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 1);
peopleAccount.deposit(50.02);
peopleAccount.withdraw(50.0);
peopleAccount.getBalance();

console.log('\n******* COMPANY ACCOUNT *******');
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.getLoan(5000);
companyAccount.deposit(600);
companyAccount.withdraw(80.0);
companyAccount.getBalance();

console.log('\n******* NEW ACCOUNT *******');
const newAccount: NewAccount = new NewAccount('Marcelo', 111);
newAccount.deposit(100);
newAccount.getBalance();
