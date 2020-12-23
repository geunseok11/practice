import {getFIleNameAndNumber} from "../utils/getFileNameAndNumber"

const [filename, numberOfGakeItems] = getFIleNameAndNumber('data/fake.csv', 10000)
console.log(filename, numberOfGakeItems)