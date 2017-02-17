import { Observable, Observer } from "rxjs";

/*
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
*/

let numbers3 = [1, 1, 2, 3, 5, 8, 13, 21, 34];
let source3 = Observable.create(observer => {
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
