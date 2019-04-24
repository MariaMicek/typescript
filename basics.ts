//OBJECT
let mojObiekt: object = {}
mojObiekt = undefined
mojObiekt = 123

//FUNCTIONS
const func = (a: number, b: number = 2, c?: number) => {                       //parametry zwykłe są wymagane        
    return a + b + (c ? c : 0)                                                 //parametry zwykłe, z wartością domyślną i opcjonalne
}

const value1 = func()
const value2 = func(2)
const value3 = func(2, 3)
const value4 = func(2, 3, 4)
const value5 = func('abc')

let result: string
result = value2


enum Weekend {FRIDAY, SATURDAY, SUNDAY}

const myFunction = (a: [number, boolean], b: Weekend, c: number = 20, d?: boolean, e?: boolean): Array<Weekend> => {
    return [Weekend.FRIDAY, Weekend.SATURDAY, Weekend.SUNDAY]
}

const v1 = myFunction([10, true], Weekend.FRIDAY)
const v2 = myFunction([10, true], Weekend.FRIDAY, 20)
const v3 = myFunction([10, true], Weekend.FRIDAY, 20, true)
const v4 = myFunction([10, true], Weekend.FRIDAY, 20, true, false)
