const customers = ['Harry', 'Fadhili', 'Clemoh'];

const activeCustomers = ['Harry', 'Fadhili'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
