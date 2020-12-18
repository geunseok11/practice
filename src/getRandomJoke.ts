import {fetchJokes} from './fetchJokes'

const random = (max : number) => Math.floor(Math.random()* max)

export type FetchResult = {type : string, value: JokeType[]}
export type JokeType = {id: number, joke: string, category:string[]}

export const getRandomJoke = () => new Promise<JokeType>((res, rej) => {
    fetchJokes<FetchResult>()
    .then((result: FetchResult) => {
        let array: JokeType[] = result.value
        res(array[random(array.length)])
    })
    .catch((e: Error) => rej(e))
})