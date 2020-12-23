import mkdirp from "mkdirp"
import {fileExists} from "./fileExists"

export const mkdir = (dirname : string) : Promise<string> =>
  new Promise(async (res, rej) => {
      const alreadyExists = await fileExists(dirname)
       alreadyExists ? res(dirname) :
       mkdirp(dirname, err => err ? rej(err) : res(dirname))
  })
