import * as fs from 'fs'

export const appendFile = (filename : string, data: any) : Promise<any> =>
  new Promise((res, rej) => {
      fs.appendFile(filename, data, 'utf8', (err: Error) => {
          err ? rej(err) : res(data)
      })
  })