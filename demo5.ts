import { Observable, Observer } from "rxjs";

/*
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
*/

let source5 = Observable.fromEvent(document, "mousemove")
                        .map((e: MouseEvent) => {
                            return {
                                x: e.clientX,
                                y: e.clientY
                            }
                        });

source5.subscribe(
    value => console.log(value),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);
