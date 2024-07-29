function createCounter(initialValue) {
    let presentValue = initialValue;
    return {
        increment(){
            return ++presentValue
        },
        decrement(){
            return --presentValue
        },
        reset() {
            presentValue = initialValue
            return presentValue
        }
    }
}

const counter = createCounter(10);
counter.increment();
counter.increment();
counter.decrement();
counter.reset();
counter.decrement();
counter.decrement();
counter.increment();