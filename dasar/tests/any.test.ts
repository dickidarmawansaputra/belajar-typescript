describe("Any Data Type",  function () {
    it("should data type any", function () {
        const person: any = {
            id: 1,
            name: "Dicki Darmawan Saputra",
            age: 28
        };

        person.age = 17;
        person.country = "Indonesia";

        console.info(person);
    });
});