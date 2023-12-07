describe("Getter & Setter", function () {
    class Category {
        _name?: string;

        get name() : string {
            if (this._name) {
                return this._name;
            } 
            return "empty";
        }
        
        set name(value: string) {
            if (value !== "") {
                this._name = value;
            }
        }
    }
    it("should support setter & getter", function () {
        const category = new Category();
        console.info(category.name);
        
        category.name = "Food";
        console.info(category.name);
        
        category.name = "";
        console.info(category.name);
    });
});