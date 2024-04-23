// var a: any = prompt("Enter A Value");

// for (let i = 0; i < a.length; i++) {
//     if (a[i] == a[i].toUpperCase()) {
//         console.log(a[i].toLowerCase());
//     } else {
//         console.log(a[i].toUpperCase());
//     }
// }

// var A: string = "HELLO#world";

// for (let i = 0; i < A.length; i++) {
//     if (A[i] == "A") {
//         console.log(A[i].slice(0, 1));
//     }
// }
// var A: string = " HELLOWORLD";

// for (let i = 0; i < A.length; i++) {
//     if (A[i] == "A") {
//         console.log(A[i].slice(5, 6));
//     }
// }
// var x: any = prompt(`Enter string`);
// var y: any = prompt(`Enter string`);
// for (var i = 0; i <= x.length; i++) {
//     if (x === y) {
//         console.log(`These are equal`);
//     } else {
//         console.log(`These are not equal`);
//     }
// }

// var inputStr: any = prompt(`Enter string`);
// var searchWord: any = prompt(`enter a word you need to search in string`);
// var wordLength: any = searchWord.length;
// var occurrences: number[] = [];
// var input: any = inputStr.length - wordLength + 1;
// for (let i = 0; i < input; i++) {
//     if (inputStr.substr(i, wordLength) === searchWord) {
//         occurrences.push(i);
//     }
// }

// console.log(
//     `Word occurs at indexes:`, occurrences.join(" * ")
// );



// var enter: any = prompt(`Enter string`);
// var remove: any = prompt(
//     `Enter a character which you need to remove from your string`
// );
// var result: any = ``;
// var indexofcharcter: any = enter.indexOf(remove);
// if (indexofcharcter !== -1) {
//     result = enter.slice(0, indexofcharcter) + enter.slice(indexofcharcter + 1);
// } else {
//     result = enter;
// }
// console.log(`result:`, result);
// var enter: any = prompt(`Enter a string`);
// var remove: any = prompt(
//     `Enter a character which you need to remove from your string`
// );

// var result: any = ``;
// var indexofcharcter: any = enter.lastIndexOf(remove);
// if (indexofcharcter !== -1) {
//     result = enter.slice(0, indexofcharcter) + enter.slice(indexofcharcter + 1);
// } else {
//     result = enter;
// }
// console.log(`result:`, result);

// var i: any = prompt(`Enter value`)
// var x: any =  prompt(`Enter value`)

// for(var i = 0)


// let sheraz: any = prompt(
//     `Enter Num and Digit and Char`
// );
// let alphabet: number = 0;
// let digit: number = 0;
// let special: number = 0;

// for (let i = 0; i < sheraz.length; i++) {
//     let x = sheraz[i];

//     if (
//         (x >= `A` && x <= `Z`) ||
//         (x >= `a` && x <= `z`)
//     ) {
//         alphabet++;
//     } else if (x >= `0` && x <= `8`) {
//         digit++;
//     } else {
//         special++;
//     }
//     console.log(`alphabet:`, alphabet);
//     console.log(`digit:`, digit);
//     console.log(`specialcharacter:`, special);
// }

// let vowel: any = prompt(`Enter a value`)
// var vowelcnt: any = 0;
// var consonant: any = 0;

// for (let i = 0; i < vowel.length; i++) {
//     var element = vowel[i];
//     if (element == `A` || element == `E` || element == `I` || element == `O` || element == `U` || element == `a` || element == `e` || element == `i` || element == `o` || element == `u`
//     ) {
//         vowelcnt++
//     } else if (element >= `A` && element <= `Z` || element >= `a` && element <= `z`)
//         consonant++
//     else {
//         console.log(`Enter Alphabets`);
//     }
// }
// console.log(`vowel`, vowelcnt);
// console.log(`consonent`, consonant);

// let occurence: any = prompt(`Enter Value`)
// let allOccurences: any = prompt(
//     `Enter Alphabet `
// );
// let count: number = 0;

// for (let i = 0; i < occurence.length; i++) {
//     if (occurence[i] == allOccurences) {
//         count++;
//     }
// }
// console.log(
//     `The character`,
//     allOccurences,
//     ` appears`,
//     count,
//     ` times in the string.`)

// let x: string = "Hello, how are you";

// let reversedWords: string = "";
// var currentWord: string = "";

// for (let i = 0; i < x.length; i++) {
//     let char: string = x[i];

//     if (char !== " ") {
//         currentWord += char;
//     } else {
//         reversedWords = currentWord + " " + reversedWords;
//         currentWord = "";
//     }
// }
// reversedWords = currentWord + " " + reversedWords;

// console.log("Reversed Order of Words:", reversedWords.trim());

// var pakistan: any = prompt(`enter a string`);
// var character: any = prompt(`enter a word`);
// var occurrences: string = "";
// for (let i = 0; i < pakistan.length; i++) {
//     if (pakistan[i] == character) {
//         occurrences += `Found '${character}' at index ${i}\n`;
//     }
// }
// console.log(occurrences)

// var x: any = prompt(``);
// var y: any = prompt(`Enter a word of the which you need to remove`);
// console.log();

// var lastRemove: any = prompt(`enter a string`);
// var remove: any = prompt(`Remove word`);
// var result: string = ``;

// for (let i = 0; i < lastRemove.length; i++) {
//     var element = lastRemove[i];
//     var indexofcharcter: any = lastRemove.lastIndexOf(remove);
// }
// if (indexofcharcter !== -1) {
//     result =
//         lastRemove.slice(0, indexofcharcter) +
//         lastRemove.slice(indexofcharcter + remove.length);
// } else {
//     result = lastRemove;
// }
// console.log(`result:`, result);

// var occurrence: any = prompt(`Enter a string`);
// var findfirst: any = prompt(`Find word`);
// console.log(
//     `the first occurence of a word in a string on index number`,
//     occurrence.search(findfirst)
// );
// var occurrence: any = prompt(`Enter a string`);
// var first: any = prompt(`Find String`);
// console.log(
//     `the last occurence of a word in a string on index number`,
//     occurrence.lastIndexOf(first)
// );


// var table: any = prompt(`Enter The Any Table`);
// for (var i = 1; i <= 10; i++) {
//     console.log(`${table} x ${i} = ${table * i}`);
// }

// var table: any = prompt(`Enter The Any Table`);
// var hello: any = prompt(`hello`)
// for (var i = 1; i <= hello; i++) {
//     console.log(`${table} x ${i} = ${table * i}`);
// }

// var Str: any = prompt(`Enter a String`);
// var char: any = prompt(
//     `Enter that which you want to remove`
// );

// var result: string = "";

// for (var i = 0; i < Str.length; i++) {
//     if (Str[i] !== char) {
//         result += Str[i]
//     }
// }
// console.log(`After Remove ${char} String is like this ${result}`);

// var str: any = prompt(`Enter a string`);

// var remove: any = prompt(`Enter a word which you need to remove`);

// var result: string = ``;

// var current: number = 0;
// var wordLength: number = remove.length;

// for (let i = 0; i < str.length; i++) {
//     var char = str[i];

//     if (char == remove[current]) {
//         current++;

//         if (current == wordLength) {
//             current = 0;
//         }
//     }
//     else {
//         result += str.slice(i, i + 1);
//         current = 0;
//     }
// }

// console.log(
//     `After removed the word ${remove} the string is like this: ${result}`
// );

// var str: any = prompt("Enter a string:");
// var resultStr: any = '';
// var charSet: any = new Set<string>();

// for (var char of str) {
//     if (!charSet.has(char)) {
//         charSet.add(char);
//         resultStr += char;
//     }
// }
// console.log(`Original String: ${str}`);
// console.log(`String with Repeated Characters Removed: ${str}`);

// Example usage:

//13. Write a ts program to swap first and last digits of a number.
// var numberToSwap: any = prompt(
//     `enter a number to swap its first and last digit`
//   );

//   var numStr: string = numberToSwap.toString();
//   var length: number = numStr.length;
//   var swappedStr: string = "";

//   for (let i = length - 1; i >= 0; i--) {
//     swappedStr += numStr[i];
//   }

//   var swappedNumber: number = parseInt(swappedStr, 10);

//   console.log(`Original Number: ${numberToSwap}`);
//   console.log(`Number after swapping first and last digits: ${swappedNumber}`);

//14. Write a ts program to calculate sum of digits of a number.
// var number: any = prompt(`enter a number to know the  sum of number's digit`);

// var numStr1: string = number.toString();

// var sum: number = 0;

// for (let i = 0; i < numStr1.length; i++) {
//   var digit = parseInt(numStr1[i]);
//   sum += digit;
// }

// console.log(`Number: ${number}`);
// console.log(`Sum of Digits: ${sum}`);

// 15. Write a ts program to calculate product of digits of a number.
// var number: any = prompt(
//     `enter a number to calculate the product of digits of a number`
//   );

//   var numtostr: string = number.toString();

//   var product: number = 1;

//   for (let i = 0; i < numtostr.length; i++) {
//     var digit = parseInt(numtostr[i]);
//     product *= digit;
//   }

//   console.log(`Number: ${number}`);
//   console.log(`Product of Digits: ${product}`);
//  16. Write a ts program to enter a number and print its reverse.

// var hello: any = prompt(`enter a number to see reverse of string`);
// var reversed: string = ``;
// for (let i = hello.length - 1; i >= 0; i--) {
//   reversed += hello[i];
// }

// console.log("Reversed number:", reversed);

// a17. Write  ts program to check whether a number is palindrome or not.
// var palindrome: any = prompt(
//   `enter an number to know that it is palindrome or not`
// );

// var isPalindrome: boolean = true;

// for (let i = 0; i < palindrome.length; i++) {
//   if (palindrome[i] != palindrome[palindrome.length - 1 - i]) {
//     isPalindrome = false;
//   }
// }

// if (isPalindrome) {
//   console.log("The number is a palindrome.");
// } else {
//   console.log("The number is not a palindrome.");
// }

//18. Write a ts program to find frequency of each digit in a given integer.


// 20. Write a ts program to print all ASCII character with their values.
// for (let i = 0; i <= 256; i++) {
//   console.log(i, String.fromCharCode(i));
// }
