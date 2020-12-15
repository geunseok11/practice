
const obj = {name:'jane', age : 22, city: 'seoul', country : 'ROK'}

export const pick = <T, K extends keyof T>(obj:T, keys:K[]) =>
    keys.map(key => ({[key] : obj[key]}))
        .reduce((res, val) => ({...res, ...val}), {})