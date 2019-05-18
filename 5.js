var data = ['b','k','f','e','a','g','h']
    var minmax = []

    var index = 0
    var result = data[0]
    
    for ( var i=0; i<data.length; i++ ) {
    	if (data[i] < result) {
        	result = data[i]
        	index = i
    	}
    }

    minmax.push(result)

    for ( var i=index; i<data.length; i++) {
    	if (data[i] > result)
    		result = data[i]
    }
    
    minmax.push(result)

    console.log(minmax)