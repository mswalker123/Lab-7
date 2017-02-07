var list = [];

var poultry={
  name:'chicken',
  price: 3.00
}

var veggies ={
  name:'String Beans',
  price: 2.50
}

var fish ={
  name:'Salmon',
  price: 15.03
}

var snackFood ={
  name:'Lays Potatoe Chips',
  price: 3.75
}

var fruit ={
  name:'mango',
  price: 5.25
}

list.push(poultry);
list.push(veggies);
list.push(fish);
list.push(snackFood);
list.push(fruit);

var sum =0
list.forEach(function(groceryItems){
  sum += groceryItems.price;
  console.log('Item: ' + groceryItems.name + ' ' + '$' + (groceryItems.price).toFixed(2));
});

console.log('Grand Total: ' + '$'+ sum.toFixed(2));
