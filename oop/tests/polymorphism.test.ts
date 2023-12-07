describe("Polymorphism", () => {
    class Employee{
        constructor(public name: string) {

        }
    }

    class Manager extends Employee{}
    class VicePresident extends Manager{}

    function sayHello(employee: Employee) {
        console.info(`Hello ${employee.name}`);
        
        // type cast
        // urutannya harus dari turunan yg paling bawah
        // urutan posisi child harus dari paling bawah, agar tidak terjadi kesalahan konversi
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VicePresident ${vp.name}`);
        }  else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        }else {
            console.info(`Hello Employee ${employee.name}`);
        }
    }

    it("should support polymorphism", () => {
        let employee = new Employee("Dicki");
        console.info(employee);

        employee = new Manager("Dicki");
        console.info(employee);
        
        employee = new VicePresident("Dicki");
        console.info(employee);
    });
    it("should support method polymorphism", () => {
        sayHello(new Employee("Dicki"))
        sayHello(new Manager("Dicki"))
        sayHello(new VicePresident("Dicki"))
    });
    it("should support type cast", () => {
        sayHello(new Employee("Dicki"))
        sayHello(new Manager("Dicki"))
        sayHello(new VicePresident("Dicki"))
    });
});