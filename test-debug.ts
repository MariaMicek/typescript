console.log('test')

function add(a, b) {
    a = a + 1
    b = b + 1
    return a + b
}

const c = add(7, 9)
const d = add('12', 7)
const e = add(null, '12')