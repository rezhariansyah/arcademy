cetakGambar = (val) => {
        var pola = (val-1)/2
        var center = val - pola
        var result = ''

        var count = 0
        var up = true

        for (var i=1 ; i<=val ; i++) {
            if (up == true) {
                count++
            } else {
                count--
            }
            if (i == center) {
                up = false
            }
        

            var data = ''
            for (var j=1 ; j<=val; j++) {
                if (j == count || j == val-(count-1)) {
                    data += ' x '
                } else {
                    data += ' = '
                }
            }

            result += data + '\n'
        }

        return result

    }
        

console.log(cetakGambar(5))