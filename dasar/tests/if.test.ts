describe("If Statement",  function () {
    it("should support if statement", function () {
        const examValue = 90;

        if (examValue >= 80) {
            console.info("A");
        } else if (examValue < 80 && examValue >=70) {
            console.info("B");
        }
    });
    it("should support ternary operator", function () {
        const examValue = 90;

        const result = examValue >= 80 ? "A" : "Bukan A";
        expect(result).toBe("A");
    });
});