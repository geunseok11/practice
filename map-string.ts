import {range} from "./range"

let names : string[] = range(1, 5+1)
    .map((val,i) => `[${i}] : ${val}`)

console.log(names)