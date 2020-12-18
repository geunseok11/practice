import { Validation } from "./classes/Validation"
import { checkEmailAd } from "./utils/checkEmailAd"


export const checkEmail = (o): [object, string[]] => {
    const result = Validation.of(a => o)
     .ap(checkEmailAd(o))

    return result.isSuccess ? [result.value, undefined] : [undefined, result.value]
}