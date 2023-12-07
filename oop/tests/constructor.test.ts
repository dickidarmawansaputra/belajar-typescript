describe("Constructor", function () {
    class Customer {
        constructor() {
            console.info("create new customer");
        }
    }

    it("should support constructor", function () {
        const customer = new Customer();
        console.info(customer);
    });
    
    it("should can create new customer in constructor", function () {
        const customer = new Customer();
        console.info(customer);
    });
});