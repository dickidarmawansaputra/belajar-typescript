describe("Visibility", () => {
    class Counter {
        private counter: number = 0;

        public increment(): void {
            this.counter++;
        }
        
        public getCounter(): number {
            return this.counter;
        }
    }

    class CounterProtected {
        protected counter: number = 0;

        public increment(): void {
            this.counter++;
        }
        
        public getCounter(): number {
            return this.counter;
        }
    }

    class DoubleCounter extends CounterProtected {
        /**
         * increment
         */
        public increment(): void {
            this.counter += 2;
        }
    }

    it("should support visibility private", () => {
        const counter = new Counter();
        // counter.counter = 10; cuma bisa diakses di dalam class
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });
    it("should support visibility protected", () => {
        const counter = new DoubleCounter();
        // counter.counter = 10; cuma bisa diakses di dalam class
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });
});