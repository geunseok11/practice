import {pick} from "./pick"

const obj = {name:'jane', age : 22, city: 'seoul', country : 'ROK'}

console.log(
    pick(obj, ['name', 'age']),
    // pick(obj, ['nam', 'agee'])
)