// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// describe("code1", () => {
//     it('takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', () => {
//       expect(code1(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//       expect(code1(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       expect(code1(secretCodeWord3)).toEqual("3cc3ntr1c")

//     })
//   })

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// pseudo:
// input: string
// output: coded string
// Create a function code1 that would take a stirng
// use built-in method .replace to change every instance of the letters needed to be coded
// return the coded message.

// e.i.
// console.log(secretCodeWord3.replace(/e/g,"3").replace(/E/, "3"))

const code1 = (string)=>{
    let coded = string.replace(/e/g,"3").replace(/E/g,"3").replace(/A/g,"4").replace(/a/g,"4").replace(/i/g,"1").replace(/I/g,"1").replace(/o/g,"0").replace(/O/g,"0")
    return coded
}

// console.log(code1(secretCodeWord1));
// ---> L4ck4d41s1c4l

// console.log(code1(secretCodeWord2));
// ---> G0bbl3dyg00k

// console.log(code1(secretCodeWord3));
// ---> 3cc3ntr1c



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe("isInIt", () => {
//     it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
//       expect(isInIt(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//       expect(isInIt(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

//     })
//   })

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// pseudo
// input: array and single letter string as Parameters
// output: array containing the particular character
// - create a function isInIt that takes an array and string as Parameters
// - extract necessary values by using .filter the array's values in lowercase ".toLowerCase()" and is the include the string given.
// - return the extractions. 

const isInIt = (array, string) =>{
    let extractions = array.filter((value) => value.toLowerCase().includes(string))
    return extractions   
}

// console.log((isInIt(fruitArray, letterA)));
// ---> [ 'Mango', 'Apricot', 'Peach' ]

// console.log((isInIt(fruitArray, letterE)));
// ---> [ 'Cherry', 'Blueberry', 'Peach' ]

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// describe("fullHouse", () => {
//     it('takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.', () => {
//       expect(fullHouse(hand1)).toEqual(true)
//       expect(fullHouse(hand2)).toEqual(false)
//       expect(fullHouse(hand3)).toEqual(false)
//       expect(fullHouse(hand4)).toEqual(true)

//     })
//   })


const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// pseudo
// input: array
// output true or false
// - create a function fullHouse that takes an array as a parameter
// - .sort the array in an ascending order "(a,b) => a - b"
// - conditional statements that would return true if the array has a certain sequence and false if it doesnt . 

const fullHouse = (array) =>{
    let sortedArr = array.sort((a,b) => a - b);
    if (sortedArr[0] == sortedArr[1] && sortedArr[1] == sortedArr[2] && sortedArr[2] == sortedArr[3]){
        return true
    }else false
        
    }
        
    // }else if  ((sortedArr[0] && sortedArr[1] === sortedArr[2]) === (sortedArr[3] == sortedArr[4])){

    //  (sortedArr[0] && sortedArr[1] === sortedArr[2]) && (sortedArr[3] == sortedArr[4])   
    // ) { 
    //     return true
    // }else if ((sortedArr[0] === sortedArr[1] && sortedArr[2] === sortedArr[3] ===sortedArr[4]) == true ){
    //     return true
    // }else false
    // return 



// } 
    
// 
 

// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))
// console.log(fullHouse(hand4))

