const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


const calculateSalesTax = (salesData, taxRates) => {
  const results = {};
  for (let i = 0; i < salesData.length; i++) {
    for (let j = 0; j< salesData[i]['sales'].length; j++) {
      results[salesData[i]['name']].totalSales += salesData[i].sales[j];
      results[salesData[i]['name']].totalTaxes += salesData[i].sales[j] * taxRates[salesData[i].province];
    }
  } else {
    for (let )
  }
  // let sum = 0;
  // for (let i = 0; i < sales.length; i++) {
  //   sum += array[i]
  // };

  totalSales = salesData[sales]
  totalTaxes = totalSales * taxRates
}