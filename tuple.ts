import {ResultType} from "./resultType"

export const tuple = () : ResultType => {
    try{
        throw new Error("something wrong")
    }catch(e) {
        return [false, e.message]
    }
}