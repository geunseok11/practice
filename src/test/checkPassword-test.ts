import { checkPassword } from "../checkPassword"

[
    {password: '123345'},
    {password: '1234'},
    {},
    {pa: '1234556'}
]
    .forEach((target, index) => {
        const [value, failureReson] = checkPassword(target)
        if(failureReson)
          console.log(index, 'validation fail.', JSON.stringify(failureReson))
        else
          console.log(index, 'validation OK', JSON.stringify(value))
    })