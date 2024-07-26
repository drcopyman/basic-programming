function helloWorld() {
    console.log('สวัสดีแนน')
} // ไม่มี input ไม่มี output

// helloWorld()

function secondHello(name: string) {
    console.log(name)
} // รับ input แต่ไม่ output

// console.log(secondHello('Max'))

function getPi() {
    return 3.14
}

// console.log(getPi())

function st(fname: string, sname: string, tname: string) {
    if (!(fname === 'nan' || sname === 'pleum') && tname === 'yo') {
        console.log('เริ่มสอน')
    } else {
        console.log('ยังไม่สอน')
    }
}

st('nan', 'pleum', 'yo')