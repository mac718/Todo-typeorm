import * as request from "supertest";
import { app } from "../src/app";
import { register } from "../src/controllers/usersController";

const auth = require("../src/middlewares/auth");

const validUser = {
  name: "Mike",
  email: "mike@email.com",
  password: "password",
};

const missingName = {
  name: "",
  email: "mike@email.com",
  password: "password",
};

describe("usersController", () => {
  describe("register", () => {
    it("returns 201 upon success", async () => {
      jest.spyOn(auth, "checkToken").mockImplementationOnce(() => {});
      const res = await request(app).post("/api/v1/users").send(validUser);
      expect(res).toBe(201);
    });

    it("throws error if name is blank", async () => {
      const res = await request(app).post("/api/v1/users").send(missingName);
      expect(res).toThrowError();
    });
  });
});
