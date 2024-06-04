let amountDue = 245.60;
let discount = 0.05;
let newAmount = (amountDue * discount).toFixed(2);
alert('Amount due: R' + amountDue);
alert('You qualify for a discount of 5% (' + discount + ') \n' +'Your new price to pay is: R' + (amountDue - (amountDue*discount).toFixed(2)));
