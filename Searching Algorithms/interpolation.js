function interpolationSearch(target, array) {                                          
    let start = 0;
    let end = array.length - 1;

    while (array[start] < target && array[end] > target) {  
        const middle = start + Math.floor(((target - array[start]) * (end - start)) / (array[end] - array[start]));
        
        if (array[middle] < target) { 
            start = middle + 1;
        } 
        else if (array[middle] > target) {
            end = middle - 1;
        } 
        else {
            return middle;
        }
    }

    return array[start] === target ? start : array[end] === target ? end : -1;
}

const data = [1, 2, 3, 4, 5];
console.log(interpolationSearch(5, data));