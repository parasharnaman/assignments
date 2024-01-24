/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // class result{
  //   constructor(category,totalSpent){
  //     this.category=category;
  //     this.price=totalSpent;
  //   }
  // }
  const n = transactions.length;
  let category1=[];
  for(let i=0;i<n;i++){
    if(!(category1.includes(transactions[i].category)))
      category1.push(transactions[i].category);
  }

  const price1= new Array(category1.length).fill(0);
  for(let i=0;i<category1.length;i++){
    for(let j=0;j<n;j++){
      if(category1[i]==transactions[j].category){
          price1[i]=transactions[j].price+price1[i];
      }
    }
  }

  const results= [];
  for(let i=0;i<category1.length;i++){
    results.push({"category":category1[i],"totalSpent": price1[i]});
  }

  return results;
}



// calculateTotalSpentByCategory([
//   {
//       id: 1,
//       timestamp: 1656076800000,
//       price: 10,
//       category: 'Food',
//       itemName: 'Pizza',
//   },
//   {
//       id: 2,
//       timestamp: 1656076800000,
//       price: 20,
//       category: 'Shopping',
//       itemName: 'Clothes',
//   },
//   {
//       id: 3,
//       timestamp: 1656076800000,
//       price: 15,
//       category: 'Food',
//       itemName: 'Burger',
//   },]);
module.exports = calculateTotalSpentByCategory;
