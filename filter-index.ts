import {range} from "./range"

const array: number[] = range(1, 10+1)
const half = array.length/2

let halfdown : number[] = array.filter((v,i) => i < half)
let halfup : number[] = array.filter((v,i) => i > half)

console.log(halfdown, halfup)