let arrayProducts = [
  {"item":"apple","type":"Fuji","weight":10,"pricePerKilo":"$3"},
  {"item":"orange","type":"Clementine","weight":6,"pricePerKilo":"$7"},
  {"item":"watermelon","type":"Nova","quantity":1,"pricePerItem":"$5"},
  {"item":"orange","type":"Navel","weight":6,"pricePerKilo":"$7"},
  {"item":"pineapple","type":"Queen","quantity":4,"pricePerItem":"$15"},
  {"item":"pineapple","type":"Pernambuco","quantity":3,"pricePerItem":"$12"},
  {"item":"apple","type":"Cameo","weight":6,"pricePerKilo":"$7"},
  {"item":"watermelon","type":"Trio","quantity":2,"pricePerItem":"$9"},
  {"item":"pineapple","type":"Red Spanish","quantity":3,"pricePerItem":"$9,99"},
  {"item":"watermelon","type":"Millionaire","quantity":2,"pricePerItem":"$7"},
  {"item":"orange","type":"Tangerine","weight":4,"pricePerKilo":"$4,99"},
  {"item":"apple","type":"Jazz","weight":4,"pricePerKilo":"$5"},
];

function allFunctions() {
  
  let costAllproducts;

function validationValue() {

  let flag = true;
  for ( let i = 0; i < arrayProducts.length; i++){

    let valueWQ = arrayProducts[i].weight || arrayProducts[i].quantity;
    let valuePriceKI = arrayProducts[i].pricePerKilo || arrayProducts[i].pricePerItem;

    if (typeof arrayProducts[i].item !== "string") { flag = false;}
    if (typeof arrayProducts[i].type !== "string") { flag = false;}
    if (typeof valueWQ !== "number") { flag = false;}
    if ((typeof valuePriceKI !== "string") && (valuePriceKI[0] !== "$")) { flag = false;}
  }

    if (flag == false){
      return (`${flag} - validation failed`);
    }
    else 
      return (`${flag} - validation passed successfully`);
}

 function quantityWatermelon() {

 	let sum = 0;

	for (let i = 0; i < arrayProducts.length; i++){

		if (arrayProducts[i].item == "watermelon"){
		   let addQuantity = +arrayProducts[i].quantity;
		    sum += addQuantity;
		   }
     }
        return `Watermelons - ${sum} `;
}

function weightApple() {

  let sum = 0;

  for (let i = 0; i < arrayProducts.length; i++){

    if (arrayProducts[i].item == "apple"){
       let addWeight = +arrayProducts[i].weight;
        sum += addWeight;
       }
     }
        return `Apples - ${sum} `;
}

function sortItem() {

  arrayProducts.sort(function (a, b) {
  if (a.item > b.item) {
    return 1;
  }
  if (a.item < b.item) {
    return -1;
  }
  return 0;
});

  return arrayProducts;
}

function sortCost() {

  arrayProducts.sort(function (a, b) {
    let valueA = a.pricePerKilo || a.pricePerItem;
    let valueB = b.pricePerKilo || b.pricePerItem;

  let firstPrice = +valueA.replace(",", ".").slice(1);
  let secondPrice = +valueB.replace(",", ".").slice(1);

  return firstPrice - secondPrice;
});

return arrayProducts;
}

function cheapOrange() {

  let orangeFilter = arrayProducts.filter(function (nameProduct) {
    return nameProduct.item == "orange";
  });

  let theCheapestPrice = orangeFilter.sort(function (a, b) {

    let firstPrice = +a.pricePerKilo.replace(",", ".").slice(1);
    let secondPrice = +b.pricePerKilo.replace(",", ".").slice(1);

   return firstPrice - secondPrice;
  });

  return (`The cheapest orange's type: ${theCheapestPrice[0].type}`);
}

function costProducts() {
  
  let costApple = 0;
  let costOrange = 0;
  let costWatermelon = 0;
  let costPineapple = 0;

  for (let i = 0; i < arrayProducts.length; i++){
   if ( arrayProducts[i].item == "apple"){

     let priceApple = arrayProducts[i].pricePerKilo;
     let weightApple = +arrayProducts[i].weight;
     let price = +priceApple.replace(",", ".").slice(1);

     costApple += weightApple * price;
 }

 if ( arrayProducts[i].item == "orange"){

     let priceOrange = arrayProducts[i].pricePerKilo;
     let weightOrange = +arrayProducts[i].weight;
     let price = +priceOrange.replace(",", ".").slice(1);

     costOrange += weightOrange * price;
 }

 if ( arrayProducts[i].item == "watermelon"){

     let priceWatermelon = arrayProducts[i].pricePerItem;
     let quantityWatermelon = +arrayProducts[i].quantity;
     let price = +priceWatermelon.replace(",", ".").slice(1);

     costWatermelon += quantityWatermelon * price;
 }

 if ( arrayProducts[i].item == "pineapple"){

     let pricePineapple = arrayProducts[i].pricePerItem;
     let quantityPineapple = +arrayProducts[i].quantity;
     let price = +pricePineapple.replace(",", ".").slice(1);

     costPineapple += quantityPineapple * price;
 }
}

costAllproducts = costApple + costOrange + costWatermelon + costPineapple;
return (`Apples - ${costApple}, Oranges - ${costOrange}, Watermelons - ${costWatermelon}, Pineapples - ${costPineapple}`);
}

console.log( "\nValidation" );
console.log( validationValue() );

console.log( "\nQuantitiy Watermelons" );
console.log( quantityWatermelon() );

console.log( "\nWeigth Apples" );
console.log( weightApple() );

console.log( "\nSort Array by Item" );
console.log( sortItem() );

console.log( "\nSort Array by Cost" );
console.log( sortCost() );

console.log( "\n" );
console.log( cheapOrange() );

console.log( "\nCost all products" );
console.log( costProducts() );

return (`Total cost all products: ${costAllproducts}`);
}

console.log( allFunctions());