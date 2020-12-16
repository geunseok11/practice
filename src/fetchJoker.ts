import fetch from "node-fetch"

export const fetchJoker = <T>() => new Promise<T>((res,rej) => {
    const jokeUrl = 'https://api.icndb.com/jokes/random/5?limitTo=[nerby]'

    fetch(jokeUrl)
        .then(res => res.json())
        .then((fetchResult: unknown) => res(fetchResult as T))
        .catch((e:Error) => rej(e))
})