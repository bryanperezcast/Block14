/*speudocode
first we will create a variable that will be our number and it will be set to 0, 
next we will create a while loop that will run if the number is less than or equal to 100
inside the while loop we will have an else-if statement that will run 
if the remainder of num / 3 equals 0 AND if the remainder of num / 5 is equal to 0 we will print the word FizzBuzz instead of the number, and we will add 1 to number
if the first condition is not true then we will create a else if that will check if the remainder of num / 3 is equal to 0, if it is truthy then it will print the word Fizz, and add one to num
if it is falsy then we will make another else-if that will check if the remainder of num / 5 is equal to 0, if it is truthy then it will print the word Buzz, and will add one to num
anything else it will print the current number
*/
let num = 1;
while(num <= 100){
    if(num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
        num++
    } else if(num % 3 === 0){
        console.log("Fizz");
        num++
    } else if(num % 5 === 0){
        console.log("Buzz");
        num++
    } else {
        console.log(num);
        num++
    }
}