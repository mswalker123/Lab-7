var list = [];

var poultry={
  name:'chicken',
  price: 3
}

var veggies ={
  name:'String Beans',
  price: 2
}

var fish ={
  name:'Salmon',
  price: 15
}

var snackFood ={
  name:'Lays Potato Chips',
  price: 3
}

var fruit ={
  name:'mango',
  price: 5
}

list.push(poultry);
list.push(veggies);
list.push(fish);
list.push(snackFood);
list.push(fruit);

var sum =0
list.forEach(function(groceryItems){
  sum += groceryItems.price;
  console.log('Item: ' + groceryItems.name + ' ' + '$' + groceryItems.price);
});

console.log('Grand Total: ' + '$'+ sum +'.00');
