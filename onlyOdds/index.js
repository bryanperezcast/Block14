/*speudocode
first we are going to create 2 arrays, one array that will hold the numbers, and one empty array that will hold all the odd numbers
second we are going to create a for loop that will go through the each index of the array with our variables and check if the remainder of the index does not eqal 0, if do we will push
that number into our second array of odd numbers.
id the remainder of the number is === to zero we will print the word no and restart the for loop with the next index.
we will go through each index of the numbers array until we have no more and we will exit the for loop, after that we will print both arrays 
*/
const array1 = [70, 42, 55, 81, 21, 91, 34];
const oddNumbers = [];

for(let i = 0; i < array1.length; i++) {
    if(array1[i] % 2 !== 0){
        oddNumbers.push(array1[i])
    } else {
        console.log("no");
    }
};
console.log("array1 - " + array1);
console.log("oddnumbers - " + oddNumbers);

