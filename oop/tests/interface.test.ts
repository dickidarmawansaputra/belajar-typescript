describe("Interface", function () {
    interface HasName {
        name: string;
    }

    interface CanSayHello {
        sayHello(name: string): void;
    }

    class Person implements HasName, CanSayHello {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}`);
        }
    }
    
    it("should support interface inheritance", function () {
        const person = new Person("Dicki");
        person.sayHello("Darmawan");
        console.info(person);
    });
});