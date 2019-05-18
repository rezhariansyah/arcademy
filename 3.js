myCountChar = (string,src) => {
    var data = string.split('')

    var total = 0
    for (var i=0 ; i<data.length ; i++) {
        if (data[i] == src) {
            total++
        }
    } return `jumlah karakter ${src} = ${total}`
}

console.log(myCountChar("bootcamp","o"))
console.log(myCountChar("arkademy","k"))