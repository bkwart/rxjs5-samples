import {Observable, Observer} from "rxjs"
import {load, loadWithFetch} from "./loader"

import {MyObserver1} from "./demo1"

let numbers1 = [1, 4, 9, 16];
let source1 = Observable.from(numbers1);
source1.subscribe(new MyObserver1());

let numbers2 = [2, 3, 5, 7, 11];
let source2 = Observable.from(numbers2);

source2.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);

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


let output = document.getElementById("output");
let button = document.getElementById("button");

let clickSource = Observable.fromEvent(button, "click");


function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

let subscription =
    load("movies_notfound.json")
        .subscribe(
            renderMovies,
            e => console.log(`error: ${e}`),
            () => console.log("complete")
        );

console.log(subscription);
//subscription.unsubscribe();


clickSource.flatMap(v => loadWithFetch("movies.json"))
    .subscribe(
        renderMovies,
        e => console.log(`error: ${e}`),
        () => console.log("complete")
    );

