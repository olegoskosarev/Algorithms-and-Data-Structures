function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = current;
    }
    return array;
}

const array = [3, 0, 1, 9, 5, 6, 2, 4, 7, 8];
console.log(insertionSort(array));