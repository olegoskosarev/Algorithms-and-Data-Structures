function mergeSort(array) {

	function merge(left, right) {
		const result = [];
		let il = 0;
		let ir = 0;
		while (il < left.length && ir < right.length) {
			if (left[il] < right[ir]) {
				result.push(left[il]);
				il++;
			} else {
				result.push(right[ir]);
				ir++;
			}
        }
        
		return result.concat(left.slice(il)).concat(right.slice(ir));
	}

	function merge_sort(items) {
		if (items.length < 2) {
			return items;
		}
		const middle = Math.floor(items.length / 2);
		const left = items.slice(0, middle);
		const right = items.slice(middle);
		return merge(merge_sort(left), merge_sort(right));
    }

	return merge_sort(array);
}

function mergeSort_v2(array) {
	if (array.length < 2) {
		return array;
	}

	const mid = Math.floor(array.length / 2);
	const a = mergeSort(array.slice(0, mid));
	const b = mergeSort(array.slice(mid));

	const result = [];
	let indexA = 0;
	let indexB = 0;

	while (indexA < a.length && indexB < b.length) {
		if (a[indexA] < b[indexB]) {
			result.push(a[indexA]);
			indexA++;
		} else {
			result.push(b[indexB]);
			indexB++;
		}
    }
    
	while (indexA < a.length) {
		result.push(a[indexA]);
		indexA++;
	}

	while (indexB < b.length) {
		result.push(b[indexB]);
		indexB++;
	}

	return result;
}

const array = [3, 0, 1, 5, 6, 2, 4, 7];
console.log(mergeSort(array));