import {readFileSync, readFile} from "fs"

console.log('read package.json using synchronous api..')

const buffer: Buffer = readFileSync('../package.json')

console.log(buffer.toString())

readFile('../package.json' , (error : Error  , buffer : Buffer) => {
    console.log('read pacakge.json using asynchronous api...')
    console.log(buffer.toString())
})


const readFilePromise = (filename: string) : Promise<string> =>
    new Promise<string>((res, rej) => {
        readFile(filename, (error : Error, buffer: Buffer) => {
            if(error)
                rej(error)
            else
                res(buffer.toString())
                
        })
    });

    (async () => {
        const content = await readFilePromise("../package.json")
        console.log('read package.json using Promise')
        console.log(content)
    })()