import * as fs from "fs"

export const fileExists = (filepath : string) : Promise<boolean> => 
    new Promise(res => fs.access(filepath, err => res(err? false : true)))