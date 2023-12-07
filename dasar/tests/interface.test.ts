import { Employee, Manager } from "../src/extending-interface";
import { Seller } from "../src/interface";
import { Person } from "../src/type-assertions";

describe("Interface Data Type", function () {
    it("should support interface & readonly properties", function () {
        const seller: Seller = {
            id: "1",
            name: "Dicki",
            // readonly properties
            npwp: "123"
        };

        console.info(seller);
    });
    it("should support interface function", function () {
        interface AddFunction {
            (value1: number, value2: number): number
        };
        
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(1, 3)).toBe(4);
    });
    it("should support indexable interface", function () {
        interface StringArray {
            [index: number]: string
        };

        const names: StringArray = ["Dicki", "Darmawan", "Saputra"];

        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
        
    });
    it("should support indexable interface for non number", function () {
        interface StringDictionary {
            [key: string]: string
        };

        const dictionary: StringDictionary = {
            "name": "Dicki",
            "country": "Indonesia"
        };

        expect(dictionary["name"]).toBe("Dicki")
        expect(dictionary["country"]).toBe("Indonesia")
    });
    it("should support extending interface", function () {
        const employee: Employee = {
            id: "1",
            name: "Dicki",
            division: "IT"
        };

        const manager: Manager = {
            id: "1",
            name: "Darmawan",
            division: "IT",
            numberOfEmployee: 10
        };

        console.info(employee);
        console.info(manager);
    });
    it("should support function in interface", function () {
        interface Person {
            name: string,
            sayHello(name: string): string
        }

        const person: Person = {
            name: "Dicki",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Darmawan"));
    });
    it("should support intersection types", function () {
        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasId & HasName;
        const domain: Domain = {
            id: "1",
            name: "Dicki"
        }

        console.info(domain);
    });
    it("should support type assertions", function () {
        const person: any = {
            name: "Dicki",
            age: 17
        }

        const person2: Person = person as Person; 
        // hati-hati penggunaan type assertion saat lakukan konversi
        // person2.sayHello("dicki") ini tidak ada, maka jadi error
        console.info(person2);
    });
});