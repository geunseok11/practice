import { Success, Failure } from "../classes/Validation"


export const checkEmailAd = (o : {email?: string}) => {
    const {email} =o
    const re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    
    return re.test(email) ? new Success(email)
        : new Failure(['invalid email address'])
}