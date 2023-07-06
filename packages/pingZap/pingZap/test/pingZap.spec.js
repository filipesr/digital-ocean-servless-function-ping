const { main } = require("../pingZap");

describe("Test PingZap", () => {
  test("PingZap", () => {
    let response = main({ name: "PingZap" });
    expect(response.body).toEqual("Hello PingZap!");
  });
});