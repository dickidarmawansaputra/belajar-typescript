describe("Instance Of", () => {
    class Employee{}
    class Manager{}

    it("should support instance of", () => {
        const employee = new Employee();
        const manager = new Manager();

        // jika typeof kebaca object
        console.log(typeof employee);
        console.log(typeof manager);

        // gunakan instanceof utk ngecek sebuah object instansiasi class tertentu
        console.log(employee instanceof Employee);
        console.log(manager instanceof Manager);

        expect(employee instanceof Employee).toBe(true);
        expect(manager instanceof Manager).toBe(true);
    });
});