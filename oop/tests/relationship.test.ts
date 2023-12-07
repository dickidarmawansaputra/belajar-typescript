describe("Relationship Class", () => {
    class Person {
        constructor(public name: string) {
            
        }
    }

    class Customer {
        constructor(public name: string) {
            
        }
    }

    it("should support relationship class", () => {
        // walaupun ada fitur ini, disarankan tidak menggunakannya karena akan membingungkan programmer
        const person: Person = new Customer("Dicki");
        console.info(person);
    });
});