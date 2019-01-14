function linearSearch(target, array) {
    const end = array.length;
    let i = 0;   
    array[end] = target;
    
    while (array[i] !== target) {
    	i++;
    }
    
    return i < end ? i : -1;
}

const array = [1, 2, 3, 4, 5];
console.log(linearSearch(3, array));