import { RoleUser, User } from "../src/enum";
import { Barang, Category, Kategori, Product } from "../src/type-alias";

describe("Enum Data Type",  function () {
    it("should data type enum", function () {
        const user: User = {
            id: "1",
            username: "dickids",
            role: RoleUser.ADMIN
        }

        console.info(user);
    });
});