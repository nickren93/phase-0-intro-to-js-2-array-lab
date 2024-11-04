// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(string){
    cats.push(string);
}

function destructivelyPrependCat(string){
    cats.unshift(string);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat (){
    cats.shift();
}

function appendCat(string){
    return [...cats, string];
}

function prependCat(string){
    return [string, ...cats];
}

function removeLastCat(string){
    return cats.slice(0, -1);
}

function removeFirstCat(string){
    return cats.slice(1);
}


