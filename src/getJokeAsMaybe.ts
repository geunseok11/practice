import * as R from "ramda"
import {getRandomJoke, JokeType} from "./getRandomJoke"
import {IMaybe, Maybe} from "./classes/Maybe"

const _getJokeAsMaybe = async() => {
    const jokeItem: JokeType = await getRandomJoke()
    const joke = R.view(R.lensProp('joke'))(jokeItem)
    return joke
}

export const getJokeAsMaybe = () => new Promise<IMaybe<string>>((res,rej) => {
    _getJokeAsMaybe()
        .then((joke:string) => res(Maybe.Just(joke)))
        .catch(e => res(Maybe.Nothing))
})

export {IMaybe, Maybe}