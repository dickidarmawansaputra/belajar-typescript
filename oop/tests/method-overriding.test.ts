describe("Method Overriding", () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    
    class Manager extends Employee {
        sayHello(name: string): void {
            // jika gunakan method overriding
            console.info(`Hello ${name}, my name is ${this.name}, i'm your manager`);

            // jika gunakan super method
            super.sayHello(name);
            console.info("I'm your manager");
            
        }
    }

    it("should support method overriding", () => {
        const manager = new Manager("Dicki");
        manager.sayHello("Darmawan");
        console.info(manager);
    })
    it("should support super method", () => {
        const manager = new Manager("Dicki");
        manager.sayHello("Darmawan");
        console.info(manager);
    });
});