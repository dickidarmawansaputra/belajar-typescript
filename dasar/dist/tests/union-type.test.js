"use strict";
describe("Union Type Data Type", function () {
    it("should data type union type", function () {
        let sample = "Dicki Darmawan Saputra";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it("union type with typeof", function () {
        function process(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 1;
            }
            else {
                return !value;
            }
        }
        expect(process("Dicki")).toBe("DICKI");
        expect(process(100)).toBe(101);
        expect(process(true)).toBe(false);
    });
});
