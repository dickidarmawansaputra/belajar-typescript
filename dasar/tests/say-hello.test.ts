import { sayHello } from "../src/say-helo"

describe("sayHello", function () {
    it("should return hello dicki", function () {
        expect(sayHello("dicki")).toBe("Hello dicki");
    });
});