function sumZero(arr) {

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++;
        }

    }


}



let a = sumZero([-4, -3, -2, 1, 10, 15, 50]);



//count the uniqu value my solution
function eniqueValue(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        if (arr[i] === arr[j]) {
            j++;
        } else {
            newArr.push(arr[i]);
            arr[i] = arr[j];
            j++;
        }
    }
    return newArr.length;

}


let ab = eniqueValue([1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 6, 8])



//instructor solution
function countEquqeValue(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }

    }
    console.log(i + 1)
}

countEquqeValue([1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 6, 8])