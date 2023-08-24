exports.getInventoryList = () => {
  return {
    success: true,
    data: [
      {
        "id": "1",
        "serie": "1i3xjRllc",
        "make": "Toyota",
        "model": "Rav4",
        "package": "XSE",
        "color": "Red",
        "year": "2018",
        "category": "SUV",
        "mileage": "240001",
        "price": "22750000",
      },
    ]
  };
};

exports.filterInventoryListById = () => {
  return {
    success: true,
    data: {
      "id": "1",
      "serie": "1i3xjRllc",
      "make": "Toyota",
      "model": "Rav4",
      "package": "XSE",
      "color": "Red",
      "year": "2018",
      "category": "SUV",
      "mileage": "240001",
      "price": "22750000",
    }
  };
};

exports.addCarToInventoryList = () => {
  return {
    success: true,
    message: `Car has been added to the Inventory List successfully`,
  };
};