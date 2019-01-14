function substringSearch(sub, str) { 
    const n = sub.length;
    const N = str.length - n + 1;
    
    for (let i = 0; i < N; i++) {  
    	let j = 0;
       	while (j < n && sub.charAt(j) === str.charAt(i + j)) {
       		j++;
     	}

       	if (j === n) {
       		return i;
       	}
    }

    return -1;
} 

const string = 'abcdefjhijklmnopqrstuvwxyz';
console.log(substringSearch('hijk', string)); 