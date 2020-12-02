
export const init =( callback : () => void) : void => {
    console.log("default")
    callback()
    console.log("all")
}