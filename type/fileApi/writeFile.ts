import * as fs from "fs"

export const writeFile = (filename: string, data: any) : Promise<any> =>
  new Promise((res,rej) => {
  fs.writeFile(filename, data, 'utf8', (err:Error) => {
      err ? rej(err) : res(data)
  })
})