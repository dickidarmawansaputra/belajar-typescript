describe("Parameter Properties", () => {
    class Person {
        constructor(public name: string) {

        }
    }

    it("should support parameter properties", () => {
        const person = new Person("Dicki");
        person.name = "Dicki Darmawan Saputra";
        console.info(person.name);
    });
});