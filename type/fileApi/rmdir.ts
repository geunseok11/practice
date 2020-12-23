import rimraf from "rimraf"
import {fileExists} from "./fileExists"

export const rmdir = (dirname : string) : Promise<string> =>
  new Promise(async (res, rej) => {
      const alreadyExists = await fileExists(dirname)
       !alreadyExists ? res(dirname) :
       rimraf(dirname, err => err ? rej(err) : res(dirname))
  })