import {Observable} from "rxjs"
import {load, loadWithFetch} from "./loader"

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

