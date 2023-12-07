import { Barang, Category, Kategori, Product } from "../src/type-alias";

describe("Object Data Type",  function () {
    it("should data type object", function () {
        const person: {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Dicki Darmawan Saputra"
        };

        console.info(person);
    });
});