const request = require('supertest');


describe("Get payment information", () => {
    it("Should return status code 200 when getPayment endpoint is called and the resource exists", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/payment/7010194");
      expect(response.statusCode).toBe(200);
    });

    it("Should return status code 500 when getPayment endpoint is called and the resource not exists", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/payment/701019");
      expect(response.statusCode).toBe(500);
    });
  });