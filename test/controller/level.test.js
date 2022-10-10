const request = require('supertest');


describe("Get user level information", () => {
    it("Should return status code 200 when getlevel endpoint is called and the resource exists", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/level/ORO");
      expect(response.statusCode).toBe(200);
    });

    it("Should return status code 500 when getlevel endpoint is called and the resource not exists", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/level/OO");
      expect(response.statusCode).toBe(500);
    });
  });