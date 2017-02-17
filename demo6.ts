import { Observable, Observer } from "rxjs";

/*
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
*/

let circle = document.getElementById("circle");
let source6 = Observable.fromEvent(document, "mousemove")
                        .map((e: MouseEvent) => {
                            return {
                                x: e.clientX,
                                y: e.clientY
                            }
                        })
                        .filter(value => value.x < 300)
                        .delay(200);

function onNext(value) {
    circle.style.left = value.x;
    circle.style.top = value.y;
}

source6.subscribe(
    onNext,
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);
