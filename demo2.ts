import { Observable, Observer } from "rxjs";

/*
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
*/

let numbers2 = [2, 3, 5, 7, 11];
let source2 = Observable.from(numbers2);

source2.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);
