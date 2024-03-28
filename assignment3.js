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

oddishOrEvenish = (x) =>{
    digits = x.toString().split('');
    sum = 0;
    for (let i in digits){
        sum += +digits[i];              // +digits[i] transforms it from string to number instead of concatenating the string
    }
    return (sum%2==0) ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(41));



// -------------- Question 6 --------------

reverseOdd = (s) => {
    words = s.split(' ');
    reversed = '';

    for(let i in words){
        if(words[i].length %2 == 0) reversed += words[i] + ' ';
        else reversed += words[i].split('').reverse().join('') + ' ';
    }

    return reversed;
}

console.log(reverseOdd("One two three four"));



// ------------ Question 7 -----------------

getHashTags = (title) => {
    words = title.split(" ");
    hashtags = [];
    words.sort(
        (a,b) => a.length - b.length
    ).reverse();
    limit = Math.min(3, words.length);
    for(let i=0; i<limit; i++)
        hashtags.push('#' + words[i]);

        return hashtags;
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));