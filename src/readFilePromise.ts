import {readFile} from "fs"


export const readFilePromise = (filename:string) : Promise<string> =>
    new Promise<string>((
        res: (value:string) => void,
        rej: (error: Error) => void) => {
            readFile(filename, (err : Error , buffer: Buffer) => {
                if(err) rej(err)
                else res(buffer.toString())
            })
        }
    )