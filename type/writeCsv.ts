import {writeCsvFormatFakeData} from './fake'
import {getFIleNameAndNumber} from './utils/getFileNameAndNumber'

const [filename, numberOfFakeData] = getFIleNameAndNumber('./data/fake', 1)
const csvFilename = `${filename} - ${numberOfFakeData}.csv`
writeCsvFormatFakeData(csvFilename, numberOfFakeData)
    .then(result => console.log(result))
    .catch((e:Error) => console.log(e.message))