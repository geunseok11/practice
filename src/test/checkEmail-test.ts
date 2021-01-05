import { checkEmail } from "../checkEmail"


[
    {email : 'abc@naver.com'},
    {email : 'abcas@naver'},
    {email: 'asd'}
].forEach((target, index) => {
    const [value, failureReson] = checkEmail(target)
    if(failureReson)
        console.log(index, 'Validation fail.', JSON.stringify(failureReson))
    else
        console.log(index, 'Validation OK', JSON.stringify(value))
})