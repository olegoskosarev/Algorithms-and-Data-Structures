function bubbleSort(array) {
    for (let i = 0, endI = array.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

function bubbleSort_v2(array) {
    let i = 0;
    let end = false;
    while (!end) {
        end = true;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                end = false;
            }
        }
        i++;
    }
    return array;  
}

const array = [3, 8, 1, 9, 5, 6, 2, 4, 7, 0];
console.log(array);
console.log(bubbleSort(array));