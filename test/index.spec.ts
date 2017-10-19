import { expect } from "chai";
import index from "../src/index";

describe("Index", () => {
  it("should not be null", () => expect(index).to.be.not.null);

  // Enums
  it("should have a Direction property", () =>
    expect(index).to.haveOwnProperty("Direction"));
  it("should have a Action property", () =>
    expect(index).to.haveOwnProperty("Action"));

  // Classes
  it("should have a Turtle property", () =>
    expect(index).to.haveOwnProperty("Turtle"));
  it("should have a Mine property", () =>
    expect(index).to.haveOwnProperty("Mine"));
  it("should have a Exit property", () =>
    expect(index).to.haveOwnProperty("Exit"));

  it("should have a Game property", () =>
    expect(index).to.haveOwnProperty("Game"));
  it("should have a Settings property", () =>
    expect(index).to.haveOwnProperty("Settings"));
});
