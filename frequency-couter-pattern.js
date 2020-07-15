// Problem - 1
// [1,2,3], [1,3,5] - the function return true if the 2nd array contains the first array square value

// NAIV Approach
function same(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false
    } else {
        for (let i = 0; i < arr1.length; i++) {
            let correntIndex = arr2.indexOf(arr1[i] ** 2);
            if (correntIndex === -1) {
                return false;
            }
            arr2.slice(correntIndex, 1);
        }
    }
    return true;
}


// let ab = same([1, 2, 3], [1, 4, 9]);
// console.log(ab)


// Frequency Couter Approach

function same2(arr1, arr2) {
    let obj1 = {}
    let obj2 = {};

    if (arr1.length !== arr2.length) {
        return;
    } else {

        for (let i of arr1) {
            obj1[i] = (obj1[i] || 0) + 1;
        }

        for (let j of arr2) {
            obj2[j] = (obj2[j] || 0) + 1;
        }

    }

    for (let key in obj1) {
        if (!(key ** 2 in obj2)) {
            return false
        }

        if ((obj2[key ** 2]) !== obj1[key]) {
            return false
        }
        return true;
    }



}



// let x = same2([1, 2, 3], [1, 4, 9])

// console.log(x)


//anagram
function anagram(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        if (index === -1) {
            return false
        }

        arr2.slice(index, 1)
    }

    return true;
}


let y = anagram("aza", "zaa");

console.log(y)