import * as fs from "fs"
import {fileExists} from "./fileExists"

export const deleteFile = (filename:string) : Promise<string> =>
  new Promise<any>(async(res,rej) => {
      const alreadyExists = await fileExists(filename)
      !alreadyExists ? res(filename) :
      fs.unlink(filename, (err) => err ? rej(err) : res(filename))
  })