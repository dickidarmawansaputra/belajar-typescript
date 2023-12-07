describe("Inheritance", function () {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it("should support inheritance", function () {
        const employee = new Employee("Saputra");
        console.info(employee.name);
        
        const manager = new Manager("Dicki");
        console.info(manager.name);
        
        const director = new Director("Darmawan");
        console.info(director.name);
    });
});