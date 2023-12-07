describe("Array Data Type",  function () {
    it("should data type array", function () {
        const names: string[] = ["Dicki", "Darmawan", "Saputra"];
        const values: number[] = [1, 2, 3]; 

        console.log(names);
        console.log(values);
    });
    it("should data type readonly array", function () {
        const hobbies: ReadonlyArray<string> = ["gowes", "musik", "membaca"];
        
        console.log(hobbies);
    });
    it("should data type tuple", function () {
        const hobbies: readonly[string, string, number] = ["gowes", "musik", 100];

        console.info(hobbies);
    });
});