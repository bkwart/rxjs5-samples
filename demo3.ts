import { Observable, Observer } from "rxjs";

let numbers3 = [1, 1, 2, 3, 5, 8, 13, 21, 34];
let source3 = Observable.create((observer: Observer<number>) => {
    for (let n of numbers3) {
        if (n === 13) {
            observer.error("Thirteen is unlucky! Error!");
        }

        observer.next(n);
    }

    observer.complete();
});

source3.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);
