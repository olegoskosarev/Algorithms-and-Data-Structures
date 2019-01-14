function binarySearch(target, array) {
    let start = 0; 
    let end = array.length - 1;  

    while (start <= end) {  
    	const middle = Math.floor((start + end) / 2);
       	if (target === array[middle]) {
       		return middle;
       	}
       	else if (target < array[middle]) {
       		end = middle - 1;
       	} 
       	else { 
       		start = middle + 1;
       	}
    }
    return -1;
}

function binarySearch_v2(target, array) {
    let start = 0; 
    let end = array.length; 
                                
    while (start < end) {  
        const middle = Math.floor((start + end) / 2);
        if (target <= array[middle]) {
            end = middle;
        } else {
            start = middle + 1;
        }
    }

    return array[start] === target ? start : -1;               
}

function binarySearch_v3(target, array, start = 0, end = array.length - 1) {    
    if (end - 1 === start) {
        return target === array[start] ? start : target === array[end] ? end : -1;
    } 

    const middle = Math.floor((start + end) / 2);

    if (target === array[middle]) { 
        return middle;
    } 
    else if (target > array[middle]) { 
        return binarySearch_v3(target, array, middle, end);
    } 
    else { 
        return binarySearch_v3(target, array, start, middle);
    }
}

const data = [1, 2, 3, 4, 5];
const target = 1;
console.log(binarySearch_v3(target, data));