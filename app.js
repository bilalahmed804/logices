
// logic number 1 
let numbers = [1, 2, 3, 4, 5]

function double(num){
  return num * 2
}

let doubleNum = numbers.map(double)

// output => [2, 4, 6, 8, 10]
console.log(doubleNum);


// logic number 2 
let numbers2 = [1, 2, 3, 4, 5]

function isEven(num){
  return num % 2 === 0
}

let evenNumber = numbers2.filter(isEven)

// output => [2, 4, 6, 8, 10]
console.log(evenNumber);

function factorial(n){
  if(n == 1 || n == 0 ) return 1

  return n * factorial (n -1)
}
console.log(factorial(5));







//  Write a program that allows for an integer array to be passed in and will then output all of the pairs that sum up to 10.  Please provide a solution that allows for 1) output all pairs (includes duplicates and the reversed ordered pairs), 2) output unique pairs only once (removes the duplicates but includes the reversed ordered pairs), and 3) output the same combo pair only once (removes the reversed ordered pairs).
//         For example passing in [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9] the following r
// For example passing in [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9] the following results should occur:
//             1) output all pairs would output: [1,9], [1,9], [4,6], [4,6], [5,5], [5,5], [5,5], [5,5], [5,5], [5,5], [6,4], [6,4] [9,1] , [9,1]
//            2) output unique pairs only once would output: [1,9], [4,6], [5,5], [6,4], [9,1]
//            3) output the same combo pair only once would output: [1,9], [4,6], [5,5]


let arr = [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]

let emptyArr = []

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if(arr[i] + arr[j] == 10){
      emptyArr.push([arr[i] , arr[j]])
    
    }
    
  }
  
}
console.log(emptyArr);

let uniquePair =[]


for (let t = 0; t < emptyArr.length; t++) {
  let currentPair = emptyArr[t]
  let exists= false
     
    for (let i = 0; i < uniquePair.length; i++) {
      if(uniquePair[i][0] === currentPair[0] && uniquePair[i][1] === currentPair[1]){
        console.log("not pair unique",currentPair);
        
        exists = true;
        break;
      }
    }

      if(!exists){
console.log("exists =>",currentPair);

        uniquePair.push(currentPair)
      }
    }
    
    console.log(uniquePair);


let uniquePair$ =[]

   for (let t = 0; t < emptyArr.length; t++) {
    let currentPair = emptyArr[t]
      let exists = uniquePair$.some((unique) =>{
        return unique[0] === currentPair[0] && unique[1] ===currentPair[1]
      })

      if(!exists){

        uniquePair$.push(currentPair)
      }
    }
    
    console.log(uniquePair$);




