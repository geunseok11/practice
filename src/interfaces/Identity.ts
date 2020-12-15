// import {IValuable, IFunctor, IApply, IApplicative, IChain,} from "../interfaces"
import {ISetoid, IMonad} from "../interfaces"

// export class Identity<T> implements IValuable<T> {
//     constructor(private _value: T) {}
//     value() {return this._value}
// }

export class Identity<T> implements ISetoid<T>,IMonad<T> {
    constructor(private _value: T) {}

    value() {return this._value}

    equals<U>(that:U): boolean{
        if(that instanceof Identity)
            return this.value() == that.value()
            return false
    }

    map<U>(fn : (x:T) => U){
        return new Identity<U>(fn(this.value()))
    }

    ap<U>(b:U){
        const f = this.value()
        if(f instanceof Function)
        return Identity.of<U>((f as Function)(b))
    }
    static of<T>(value : T): Identity<T> {return new Identity<T>(value)}

    chain<U>(fn: (T) => U): U {
        return fn(this.value())
    }
}

