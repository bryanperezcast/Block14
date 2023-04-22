/*speudocode
first we will create three variables, one will hold our word, one will count the ammount of vowels, and the other will keep count of the ammount of consonants,
next we will create a for loop that will iterate over out word and inside the for loop we will have a if statement that checks if the index of the current letter is a vowel, if it is it will 
add one to the vowel counter and restart the loop with the next letter,
if the current letter is not a vowel than we will have an else statement that will add one to the consonant counter,
after we finish going through the length of the word we will print the word and the amount of consonants and vowels in the word,
*/
const word = "ukelele";
let vowels = 0;
let consonant = 0;
for(let i = 0; i < word.length; i++){
    if(word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u"){
       vowels++; 
    }
    else{
        consonant++;
    }
}
console.log(word +  " has " + consonant + " consonants and " + vowels + " vowels")