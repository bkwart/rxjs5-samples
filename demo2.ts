import { Observable } from "rxjs";

let numbers2 = [2, 3, 5, 7, 11];
let source2 = Observable.from(numbers2);

source2.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);
