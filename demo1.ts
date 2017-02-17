import { Observable, Observer } from "rxjs";

let numbers = [1, 4, 9, 16];
let source = Observable.from(numbers);

class MyObserver implements Observer<number> {

    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.log(`error: ${e}`);
    }

    complete() {
        console.log("complete");
    }

}

source.subscribe(new MyObserver());
