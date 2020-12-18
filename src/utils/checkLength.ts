import {Success, Failure} from "../classes/Validation"

export const checkLength = (o : {password?: string}, minLength: number = 6) => {
    const {password} = o
    return(!password || password.length < minLength) ?
    new Failure(['Password must have more thn 6 characters']) : new Success(o)
}