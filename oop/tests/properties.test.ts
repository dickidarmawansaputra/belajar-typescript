describe("Properties", function () {
    class Customer {
        readonly id: number;
        // default value properties
        name: string = "Guest";
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        // method
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it("should support properties", function () {
        const customer = new Customer(1, "Dicki");
        customer.age = 17;

        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
        console.info(customer);
    });
    it("should support method", function () {
        const customer = new Customer(1, "Dicki");
        customer.sayHello("Darmawan");

        console.info(customer);
    });
});