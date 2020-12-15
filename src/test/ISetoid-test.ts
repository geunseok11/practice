import {Identity} from "../interfaces/Identity"

const one = new Identity(1), anotherOne = new Identity(1)
const two = new Identity(2)

console.log(
    one.equals(anotherOne),
    one.equals(two),
    one.equals(1),
    one.equals([1])
)