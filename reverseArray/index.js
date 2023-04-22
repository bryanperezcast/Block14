/*speudocode
first we will create two arrays, one will hold the original numbers, the other will be a empty array,
next we will create a for loop that will iterate through the original array backwards and will push the same number into the new array,
after that we will print the new array
*/
let numbers = [1, -1, 2, -3, 5, -8, 13];
let reverse = [];
for(i = numbers.length - 1; i >= 0; i--){
    reverse.push(numbers[i]);
}
console.log(reverse);
