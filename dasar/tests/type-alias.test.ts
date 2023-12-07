import { Barang, Category, Kategori, Product } from "../src/type-alias";

describe("Type Alias Data Type",  function () {
    it("should data type, type alias", function () {
        const category: Category = {
            id: "1",
            name: "Elektronik"
        };

        const product: Product = {
            id: "1",
            name: "Huawei",
            price: 1000,
            category: category
        };

        console.info(category);
        console.info(product);
    });
    it("type alias for union type", function () {
        const kategori: Kategori = {
            id: "1",
            nama: "Elektronik"
        };

        const barang: Barang = {
            id: 1,
            nama: "Huawei",
            harga: 1000,
            kategori: kategori
        };

        console.info(kategori);
        console.info(barang);
    });
});