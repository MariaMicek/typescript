let zrobione: boolean = true
let liczba: number = 123
let tekst: string = 'to jest tekst'

let tablicaLiczb: number[] = [1, 2, 3, 4, 5]
let tablicaLiczb2: Array<number> = [1, 2, 3]

let tablicaStringow: string[] = ['ala', 'ma', 'kota']
let tablicaStringow2: Array<string> = ['ok', 2]
tablicaStringow2.push(123)

let krotka1: [number, boolean] = [12, true]
krotka1 = ['a', 12]
let krotka2: [string, boolean[]] = ['test', [true, false]]
let krotka3: [[number, boolean], [string, boolean[]]] = [krotka1, krotka2]


let miesiacRezerwacji: string = 'lipiec'
miesiacRezerwacji = 'june'

if(miesiacRezerwacji === 'lipiec'){
    //fuckup
}

enum Miesiac {STYCZEN, LUTY, MARZEC, KWIECIEN, MAJ, CZERWIEC, LIPIEC, SIERPIEN, WRZESIEN, PAZDZIERNIK, LISTOPAD, GRUDZIEN}

let newMiesiacRezerwacji: Miesiac = Miesiac.LIPIEC 

if (newMiesiacRezerwacji === Miesiac.LIPIEC) {
    console.log('sukces')
}