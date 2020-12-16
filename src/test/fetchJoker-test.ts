import {fetchJoker} from "../fetchJoker"

fetchJoker()
    .then(result => console.log(result))
    .catch((e:Error) => console.log(e.message))