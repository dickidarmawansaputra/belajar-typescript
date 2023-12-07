describe("Loop",  function () {
    it("should support for i", function () {
        const names: string[] = ["Dicki", "Darmawan", "Saputra"];
        
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
    });
    it("should support for of", function () {
        const names: string[] = ["Dicki", "Darmawan", "Saputra"];
        
        for (const name of names) {
            console.info(name);
        }
    });
    it("should support for in", function () {
        const names: string[] = ["Dicki", "Darmawan", "Saputra"];
        
        for (const index in names) {
            console.info(names[index]);
        }
    });
    it("should support while loop", function () {
        let counter: number = 0;
        
        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    });
    it("should support do while loop", function () {
        let counter: number = 0;

        do {
            console.info(counter);
            counter++;
        } while (counter < 10);
    });
    it("should support break and continue", function () {
        let counter: number = 0;

        do {
            counter++;

            if (counter == 10) {
                break;
            }

            if (counter % 2 === 0) {
                continue;
            }
            console.info(counter);
        } while (true);
    });
});