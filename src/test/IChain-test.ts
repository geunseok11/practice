import {Identity} from "../interfaces/Identity"

console.log(
    Identity.of(1).map(value => `the count is ${value}`).value(),
    Identity.of(1).chain(value => Identity.of(`count is ${value}`)).value()
)