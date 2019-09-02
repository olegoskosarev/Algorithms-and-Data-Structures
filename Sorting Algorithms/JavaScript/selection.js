function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [array[i], array[indexMin]] = [array[indexMin], array[i]];
        }
    }
    return array;
}

const array = [3, 7, 4, 9, 5, 1, 8, 0, 2, 6];
console.log(selectionSort(array));