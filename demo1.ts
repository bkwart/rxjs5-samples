import { Observer } from "rxjs";

export class MyObserver1 implements Observer<number> {

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
