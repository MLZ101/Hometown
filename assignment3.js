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