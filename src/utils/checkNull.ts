import {Success, Failure} from "../classes/Validation"

export const checlNull = <S, F> (o: {password?: string}) => {
    const {password} = o
    return (password == undefined || typeof password != 'string') ? 
    new Failure(['Password can not ve null']) : new Success(o)
}