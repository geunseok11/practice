const calc = (value: number, cb : (number) => void): void => {
    let add = (a , b) => a + b
    function multyply(a,b) {return a * b}

    let result = multyply(add(1,2), value)
    cb(result)
}

calc(30, (result:number) => console.log(`result is ${result}` ))