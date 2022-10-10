const request = require('supertest');


describe("Get shipment information", () => {
    it("Should return status code 200 when getshipment endpoint is called and the resource exists", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/shipment/1000010194");
      expect(response.statusCode).toBe(200);
    });

    it("Should return status code 500 when getshipment endpoint is called and the resource not exists", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/shipment/100001019");
      expect(response.statusCode).toBe(500);
    });
  });