describe("Abstract Class", () => {
    abstract class Customer {
        readonly id: number;
        abstract name: string;

        constructor(id: number) {
            this.id = id;
        }

        hello() {
            console.info("Info");
            
        }

        abstract sayHello(name: string): void;
    }

    class RegulerCustomer extends Customer {
       // yg abstract wajib di deklarasikan ulang
        name: string;

        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }

        // yg abstract wajib di deklarasikan ulang
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it("should support abstract class", () => {
        // abstract class tidak bisa dibuat objectnya
        // jadi buat object dari turunannya
        const customer = new RegulerCustomer(1, "Dicki");
        customer.sayHello("Darmawan");
    });
});