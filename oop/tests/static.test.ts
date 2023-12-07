describe("Static", () => {
    class Config {
        static NAME: string = "Belajar TypeScript OOP";
        static AUTHOR: string = "Dicki Darmawan Saputra";
    }

    class MathUtil {
        static sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
    }

    it("should support static properties", () => {
        console.info(Config.NAME);
        console.info(Config.AUTHOR);
    });
    it("should support static method", () => {
        console.info(MathUtil.sum(1 , 2, 3, 4, 5));
    });
});