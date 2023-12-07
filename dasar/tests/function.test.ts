describe("Function",  function () {
    it("should support function", function () {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Dicki")).toBe("Hello Dicki");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Dicki");
    });
    it("should support function parameter with default value", function () {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Dicki")).toBe("Hello Dicki");
    });
    it("should support function rest parameter", function () {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1,2,3,4,5)).toBe(15);
    });
    it("should support function optional parameter", function () {
        function sayHello(firstName: string, lastName?: string): string {
            if (!lastName) {
                return `Hello ${firstName}`;
            }
            
            return `Hello ${firstName} ${lastName}`;
        }

        expect(sayHello("Dicki")).toBe("Hello Dicki");
    });
    it("should support function overloading", function () {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value * 10;
            }
        }

        expect(callMe("Dicki")).toBe("DICKI");
        expect(callMe(10)).toBe(100);
    });
    it("should support function as parameter", function () {
        function sayHello(name: string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`;
        }

        function toUpperCase(name: string): string {
            return name.toUpperCase();    
        }

        expect(sayHello("Dicki", toUpperCase)).toBe("Hello DICKI");
    });
    it("should support anonymous function as parameter", function () {
        function sayHello(name: string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`;
        }

        expect(sayHello("Dicki", function (name: string): string {
            return name.toUpperCase();    
        })).toBe("Hello DICKI");
    });
    it("should support arrow function as parameter", function () {
        function sayHello(name: string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`;
        }

        expect(sayHello("Dicki", (name: string): string => name.toUpperCase())).toBe("Hello DICKI");
    });
});