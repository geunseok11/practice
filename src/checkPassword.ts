import { Validation } from "./classes/Validation"
import { checkLength } from "./utils/checkLength"
import { checlNull } from "./utils/checkNull"


export const checkPassword = (o) : [object, string[]] => {
    const result = Validation.of(a => b => o)
    .ap(checlNull(o))
    .ap(checkLength(o))
    

    return result.isSuccess ? [result.value, undefined] : [undefined, result.value]

}