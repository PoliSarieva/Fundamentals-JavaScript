function characterInRange (symbolOne, symbolTwo) {
    let start = Math.min(symbolOne.charCodeAt(0),symbolTwo.charCodeAt(0));
    let end = Math.max(symbolOne.charCodeAt(0),symbolTwo.charCodeAt(0));
    let arr = [];
    
   for (let index = start+1; index < end; index++) {
        let symbol = String.fromCharCode(index);
        arr.push(symbol);
    }

    console.log(arr.join(" "));
}

characterInRange('a','d');
characterInRange('#',':');