describe("Switch Statement",  function () {
    it("should support switch statement", function () {
        function sayHello(name: string): string {
            switch (name) {
                case "Dicki":
                    return `Hi Dicki`;
                case "Darmawan":
                    return `Hi Darmawan`;
                default:
                    return `Hi`;
            }
        }
    });
});