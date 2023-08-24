jest.mock('../../models');

const inventoryListServices = require('../../services/inventoryListServices');
const db = require('../../models');

const { mockData } = require('../mock/mockData');

describe("Inventory List Service", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  describe("getInventoryList", () => {
    describe("when exist data on db", () => {
      it("should retrieve data successfully", async () => {
        db.InventoryList.findAll.mockResolvedValue(mockData.inventoryList);
        const data = await inventoryListServices.getInventoryList();
        expect(data).toStrictEqual({ success: true, data: mockData.inventoryList });
      });
    });
    describe("when data is empty on db", () => {
      it("should retrieve empty data successfully", async () => {
        db.InventoryList.findAll.mockResolvedValue([]);
        const data = await inventoryListServices.getInventoryList();
        expect(data).toStrictEqual({ success: true, data: [] });
      });
    });
    describe("when db crash", () => {
      it("should catch error", async () => {
        db.InventoryList.findAll.mockRejectedValue(new Error("Couldn't connect to DB"));
        try {
          await inventoryListServices.getInventoryList();
        } catch (err) {
          expect(err).toBeInstanceOf(Error);
          expect(err.message).toBe("Error: Couldn't connect to DB");
        }
      });
    });
  });

  describe("filterInventoryListBySerialId", () => {
    describe("given existed data on db", () => {
      describe("when data is being filtered correctly", () => {
        it("should retrieve data successfully", async () => {
          const serialId = "1i3xjRllc";
          db.InventoryList.findAll.mockResolvedValue(mockData.inventoryList[1]);
          const data = await inventoryListServices.filterInventoryListBySerialId(serialId);
          expect(data).toStrictEqual({ success: true, data: mockData.inventoryList[1] });
        });
      });
      describe("when data is not being found it", () => {
        it('should return empty array formatted', async () => {
          const serialId = "xxx";
          db.InventoryList.findAll.mockResolvedValue([]);
          const data = await inventoryListServices.filterInventoryListBySerialId(serialId);
          expect(data).toStrictEqual({ success: true, data: [] });
        });
      });
    });
    describe("when db crash", () => {
      it("should catch error", async () => {
        db.InventoryList.findAll.mockRejectedValue(new Error("Couldn't connect to DB"));
        try {
          await inventoryListServices.getInventoryList();
        } catch (err) {
          expect(err).toBeInstanceOf(Error);
          expect(err.message).toBe("Error: Couldn't connect to DB");
        }
      });
    });
  });

  describe("addCarToInventoryList", () => {
    describe("when pass all arguments", () => {
      it("should create successfully the data", async () => {
        const serialId = "1i3xjRllc";
        const carDetails = [{
          "serialId": serialId,
          "make": "Kia",
          "model": "Sorento",
          "package": null,
          "color": "Silver",
          "year": "2019",
          "category": "SUV",
          "mileage": "13000",
          "price": "213987123",
        }];
        db.InventoryList.create.mockResolvedValue(carDetails);
        const data = await inventoryListServices.addCarToInventoryList(carDetails, serialId);
        expect(data).toStrictEqual({ success: true, data: carDetails });
      });
    });
    describe("when db crash", () => {
      it("should catch error", async () => {
        db.InventoryList.findAll.mockRejectedValue(new Error("Couldn't connect to DB"));
        try {
          await inventoryListServices.getInventoryList();
        } catch (err) {
          expect(err).toBeInstanceOf(Error);
          expect(err.message).toBe("Error: Couldn't connect to DB");
        }
      });
    });
  });
});