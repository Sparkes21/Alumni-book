const maxProfit = (array) => {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;


  for (let i = 0; i <= array.length; i++) {
    buyPrice = array[i];
    console.log(buyPrice)
    sellPrice = array[i + 1];
    console.log(sellPrice);
    if (sellPrice > buyPrice) {
      maxProfit = sellPrice - buyPrice
    }
  }
  console.log(maxProfit);
  return maxProfit;
}

maxProfit([45, 24, 35, 31, 40, 38, 11]);

