//---------- Question 1 -------------

removeElement = (arr, element) =>{
    updated_arr = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] !=  element)
            updated_arr.push(arr[i])
    }
    return updated_arr
}

arr = [1,2,3,4,5]
updated_arr = removeElement(arr, 3)
console.log(updated_arr)




// ------------ Question 2 --------------

countTrue = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}

console.log( countTrue([true, false, false, true, false]) )



// --------- Question 3 -------------

toArray = (object) =>{
    return (object.length == 0) ? [] : Object.entries(object)
}
obj = {a:1, b:2}
console.log(toArray(obj))




// ---------- Question 4 -------------

    // there is a method 'includes()' which returns whether or not a char exists in a string
luckyNumber = (arr) => {
    for (let i = 0; i<arr.length; i++){
        if (arr[i].toString().includes("7")) return 'LUCKY';
    }
    return "There is no 7 in the array :(";
}

console.log(luckyNumber([2, 55, 60, 97, 86]));
console.log(luckyNumber([1]))


// ------------ Question 5 ------------