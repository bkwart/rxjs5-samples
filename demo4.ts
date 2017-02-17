import { Observable, Observer } from "rxjs";

/*
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
*/

let numbers4 = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
let source4 = Observable.create(observer => {
    let index = 0;

    let produceValue = () => {
        observer.next(numbers4[index++]);

        if (index < numbers4.length) {
            setTimeout(produceValue, 2000);
        }
        else {
            observer.complete();
        }
    }

    produceValue();
}).map(n => n / 2)
  .filter(n => n > 10);

source4.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);
