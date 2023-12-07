"use strict";
describe("Array Data Type", function () {
    it("should data type array", function () {
        const names = ["Dicki", "Darmawan", "Saputra"];
        const values = [1, 2, 3];
        console.log(names);
        console.log(values);
    });
    it("should data type readonly array", function () {
        const hobbies = ["gowes", "musik", "membaca"];
        console.log(hobbies);
    });
    it("should data type tuple", function () {
        const hobbies = ["gowes", "musik", 100];
        console.info(hobbies);
    });
});
