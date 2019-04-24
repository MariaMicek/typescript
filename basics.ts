//INTERFACE

interface NaszTyp {
    imie: string;
    wiek: number;
    dodatkowe?: boolean;
}

function testFunc(param: NaszTyp): void {
    console.log(param.imie)
    console.log(param.wiek)
    console.log(param.dodatkowe)
}

let testObj = {
    imie: 'marysia',
    wiek: 21,
    dodatkowe: true
}

testFunc(testObj)