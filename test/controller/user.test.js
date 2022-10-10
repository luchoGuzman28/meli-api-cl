const request = require('supertest');


describe("Get user information", () => {
    it("Should return status code 200 when getUser endpoint is called", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/user/1");
      expect(response.statusCode).toBe(200);
    });

    it("Should return status code 404 when getUser endpoint is called and the resource not exists", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/user");
      expect(response.statusCode).toBe(404);
    });
  });


  describe("Get user purchases information", () => {
    it("Should return status code 200 when getUser purchases endpoint is called", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/user/1/purchases");
      expect(response.statusCode).toBe(200);
    });

    it("Should return status code 500 when getUser purchases endpoint is called and the resource not exists", async () => {
      const response = await request("https://meli-api-cl.herokuapp.com").get("/user/2/purchases");
      expect(response.statusCode).toBe(500);
    });
  });