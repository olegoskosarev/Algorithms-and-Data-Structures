function quickSort(array) {
    
    function partition(arr, l, r) {
        const pivot = arr[Math.floor((l + r) / 2)];
    
        while (l <= r) {
            while (arr[l] < pivot) {
                l++;
            }
            while (arr[r] > pivot) {
                r--;
            }
            if (l <= r) {
                [arr[l], arr[r]] = [arr[r], arr[l]];
                l++;
                r--;
            }
        }
        return l;
    }
    
    function quick_sort(array, left = 0, right = array.length - 1) {
        if (right > left) {     // array.length > 1.
            const index = partition(array, left, right);
            quick_sort(array, left, index - 1);
            quick_sort(array, index, right);
        }
        return array;
    }

    return quick_sort(array);
}

function quickSort_v2(arr, low = 0, high = arr.length - 1) {
    let i = low;                
    let j = high;
    const middle = arr[Math.round(( low + high ) / 2)];
    while (i <= j) {
        while(arr[i] < middle) {
            ++i;  
        } 
        while(arr[j] > middle) {
            --j;  
        }
        if(i <= j) {           
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++; j--;
        }
    }
        
    if (low < j){
        quickSort_v2(arr, low, j);
    } 

    if(i < high) {
        quickSort_v2(arr, i, high);
    }

    return arr; 
}

function quickSort_v3(arr) {
    if (arr.length === 0) return [];
    const a = []; 
    const b = [];
    const pivot = arr[0];
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] < pivot) {
            a.push(arr[i]);
        } else {
            b.push(arr[i]);
        }
    }
    return quickSort_v3(a).concat(pivot, quickSort_v3(b));
}

const array = [9, 2, 5, 1, 0, 6];
console.log(quickSort(array));