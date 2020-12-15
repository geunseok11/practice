import { Identity } from "../interfaces/Identity"


type Iperson = { name : string, age: number}
const jack = Identity.of(['Jack', 32])

console.log(
    jack
        .map(([name,age]) => ([name, age]))
        .chain((p:Iperson) => Identity.of(p))
        .map(({name, age}) => [name,age])
        .value()[0] == jack.value()[0] //true
)