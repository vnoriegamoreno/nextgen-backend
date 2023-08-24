const inventoryListMockData = [
  {
    "id": "1",
    "serialId": "1i3xjRllc",
    "make": "Toyota",
    "model": "Rav4",
    "package": "XSE",
    "color": "Red",
    "year": "2018",
    "category": "SUV",
    "mileage": "240001",
    "price": "22750000",
  }
];

exports.getInventoryList = () => {
  return {
    success: true,
    data: inventoryListMockData
  };
};

exports.filterInventoryListById = (serialId) => {
  const car = inventoryListMockData.find((car) => car.serialId === serialId);
  if (!car) {
    return {
      success: false,
      data: {},
    };
  }
  return {
    success: true,
    data: car
  };
};

exports.addCarToInventoryList = (carProps, serialId) => {
  const car = {
    "id": `${(parseInt(inventoryListMockData[inventoryListMockData.length - 1].id) + 1)}`,
    "serialId": serialId || null,
    "make": carProps?.make || null,
    "model": carProps?.model || null,
    "package": carProps?.package || null,
    "color": carProps?.color || null,
    "year": `${carProps?.year || new Date().getFullYear()}`,
    "category": carProps?.category || null,
    "mileage": `${carProps?.mileage || 0}`,
    "price": `${carProps?.price || 0}`,
  };
  inventoryListMockData.push(car);
  return {
    success: true,
    message: `Car has been added to the Inventory List successfully`,
  };
};