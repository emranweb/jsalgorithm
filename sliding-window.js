//NAIV Approach
function maxSumArray(arr, sum) {
    if (sum > arr) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - sum + 1; i++) {
        let temp = 0;

        for (let j = 0; j < sum; j++) {
            temp = temp + arr[i + j]
            if (temp > max) {
                max = temp;
            }
        }
    }
    return max;

}


let a = maxSumArray([2, 3, 4, 6, 7, 8, 9, 7, 6], 3);
console.log(a)


//sliding window pattern


function maxSumArray2(arr, sum) {
    let max = 0;
    let temp = 0;

    for (let i = 0; i < sum; i++) {
        max = max + arr[i]
    }

    temp = max;
    for (let j = sum; j < arr.length; j++) {
        temp = (temp - arr[j - sum]) + arr[j];
        max = Math.max(max, temp);
    }
    return max;
}

let b = maxSumArray2([2, 3, 4, 6, 7, 8, 9, 7, 6], 3);
console.log(b)