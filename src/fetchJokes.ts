import fetch from "node-fetch"

export const fetchJokes = <T>() => new Promise<T>((res,rej) => {
    const jokeUrl = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]'

    fetch(jokeUrl)
        .then(res => res.json())
        .then((fetchResult: unknown) => res(fetchResult as T))
        .catch((e:Error) => rej(e))
})