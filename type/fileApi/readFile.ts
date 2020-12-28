import * as fs from "fs"

export const readFile = (filename:string) : Promise<any> =>
  new Promise<any>((res,rej) => {
      fs.readFile(filename, 'utf8', (err:Error, data: any) => {
          err? rej(err) : res(data)
      })
  })