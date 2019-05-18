function randomString() {
	var chars = "0123456789abcdefghiklmnopqrstuvwxyz";
	var string_length = 32;
	var random = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		random += chars.substring(rnum,rnum+1);
    }
    
	return random
}

function generateString(val) {
    var data = [];

    for ( var i=1; i<=val; i++)
        data.push(randomString());
    return data;
}

console.log(generateString(8));
