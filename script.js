class restaurantManager {
  // restaurantList property
  restaurantList = [
    {
      name: "KFC",
      city: "Hyderabad",
    },
    {
      name: "Burger King",
      city: "Chennai",
    },
    {
      name: "Pizza Hut",
      city: "Bangalore",
    },
    {
      name: "Dominos",
      city: "Pune",
    },
    {
      name: "Subway",
      city: "Mumbai",
    },
    {
      name: "KFC",
      city: "Mumbai",
    },
    {
      name: "Dominos",
      city: "Bangalore",
    },
  ];

  printRestaurentNames() {
    return this.restaurantList.map((obj) => obj.name);
  }

  filterRestaurentsByCity(cityName) {
    return this.restaurantList.filter((obj) => obj.city == cityName);
  }
}

const restaurent = new restaurantManager();
console.log(restaurent.printRestaurentNames());
console.log(restaurent.filterRestaurentsByCity("Chennai"));

// Question-2
orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

let totalOrders = 0;
for (const key in orderData) {
  totalOrders += orderData[key];
}

console.log(`Total Orders: ${totalOrders}`);

const orderDataKeys = Object.keys(orderData);

console.log(`Total number of Order proportions: ${orderDataKeys.length}`);

const percentArray = orderDataKeys.map((key, index) => {
  return {
    id: index + 1,
    order: key,
    orderPercentage: ((orderData[key] / totalOrders) * 100).toFixed(2),
    restaurent: "Punjabi Tadka",
  };
});

console.log(percentArray);
