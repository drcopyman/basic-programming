function add(a: string, b: number) {
    return a + b
} 

function remove(a: number, b:number) {
    return a - b
}

function mul(a: number, b: number, c: number) {
    return a * b * c
}


// function grade(homework: number, midterm: number, final: number){
//     let score: number = homework + midterm + final

//     if (score < 50) {
//         return 'เกรด F'
//     } else if (score < 60) {
//         return 'เกรด D'
//     } else if (score < 70) {
//         return 'เกรด C'
//     } else if (score < 80) {
//         return 'เกรด B'
//     }
// }

// console.log(grade(10, 20, 30))

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'เกรด F'
    } else if (score < 60) {
        return 'เกรด D'
    } else if (score < 70) {
        return 'เกรด C'
    } else if (score < 80) {
        return 'เกรด B'
    } else {
        return 'เกรด A'
    }
}

console.log(grade(100, 100, 100))



