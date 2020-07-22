let person = {
    face: "ugly",
    age: 22
};

//object^^
//person.age = 22; This allows you to select a variable within an obect
//console.log(person.face)<< Again this selects the variable witihin the object, printing to console. 

let shoppingList = ["red", "blue"]



shoppingList[2] = "black";

console.log(shoppingList.length);
//Square brackats are array This allows you to select the array


//array = datatype that stores lists. 

//function Is a data type that performs a task

function greet(name, lastName) {
    console.log("hello " + name + ' ' + lastName);

}

greet("jamie", "phillpo");

function addTwo(number) {
    console.log(number + 2);
}

addTwo(10);

let isGreater = 4 > 1;
console.log(isGreater);

let myNum = 123;
let myString = myNum.toString();
typeof myString;

console.log(myString);

let list = ["pizza", "duck", "tomato"];

console.log(list[2]);


let thirdLetter = "";
let firstName = "Laura";

thirdLetter = firstName[2];

console.log(thirdLetter);


let eightLetter = "";
let bedroom = "twentytwo";

eightLetter = bedroom[7];

console.log(eightLetter);

let myStr = "bob";
myStr = "job";

console.log(myStr);

let firstWord = "tomtom";
let lastLetter = firstWord[firstWord.length - 1];

console.log(lastLetter);

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "A " + myNoun + " with " + myAdjective + " legs " + myVerb + " through the town " + myAdverb;

console.log(wordBlanks);
    

var arr = [                                                                                                                                                                                                 
    [1, 2, 3],
     [4, 5, 6],
      [[7, 8, 9], 11, 12]                                                  

];

myData = arr[2][2];

console.log(myData);                        



arr.push(7);

console.log(arr);

arr.push([7, 9, "ducks are nutritionally inadequate."])

console.log(arr);

let removedLast = arr.pop()
//the .pop function removes the last argument fromm an array. You can then store it be setting tha variable to the array.pop.
console.log(removedLast);
console.log(arr); 

//Using the console.log We can see that the array arr has lost its last element. This has now been stored inside the removedLast variable. We can thten call this function using the console.log. 

let firstElement = arr.shift();

console.log(firstElement);
console.log(arr);

arr.unshift([1, 2, 3]);

console.log(arr);

//unshift.([]) allows us to add elements back into an array only at the start hoever. This is useful as we can add back elements that wer previously shifted. So to summaris> We can .push() elements which adds them to the end of our array. We can also .pop() elemeents which removes them from the end of the array. These removed items can then be stored in a variable whiich can be later called upon if we need. .shift() removes things from the start of the program which again can be stored for later use inside a variable. The oppoiste which is intuitiec is .unshift(). This can be used to add things to the start of the array. 



function reusableFunction() {
    console.log("hello everyone - ");
}

reusableFunction()


//freeCodeCamp has adressed a few things and along with the things I have learnt, would like to preface the sectionn about function. Functions are dadta types that are able to perform tasks ofr calculate values. The key thing that FCC touches on is the fac thtat functions are reusable throughtout your javascript code. I have just picked up on this as the FCC syllabus transitioned to toufch on this subject. I figured it would be important to note here for my personal records. 


function sumOf(a, b) {
    console.log(a + b);
}


sumOf(2, 4);


//I have been learning about the return statement which is funny. I didnt understand what the difference between this statement and theconsole.log statement was. I now understand a few more things the utmost being that the return statement terminates the function. It stores the value too. It seems that the return function calculates and returns the value of the operations within that function. 

function addFive(num) {
    return num + 5; 
}

let summated = addFive(20);
console.log(summated);


//shift and push in an array to make a queue. This is the objective and to simplify we are essentially doing this: 12345 -->
//23456 - as you can see the first item has been deleted and the last item shas been added utilizing the push and shift.

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift()
}

let array = [1, 2, 3, 4, 5];

let run = nextInLine(array, 6);

console.log(run);


const fruit = "apple";

switch(fruit) {

    case "mango": 
    console.log("Mangoes are 1.45");
    break;
    case "apple":
    case "orange":
        console.log("Apples and oranges are 2.45");
        break;

}

console.log("Is there anything else you would like?");


//switches are a convenient way to evaluate an expression. In this example the expression is stated as apple - repersented by the const fruit apple. The case will correspond to the expression presented and then statements asosciated with the case. 

//Card counting game utilises switches. 

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++;
        break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count--;
        break;
    }

    var holdbet = "";

    if(count <= 0) {
        holdbet = "Hold";
    } else if(count > 0) {
        holdbet = "Bet";
    }

    console.log(count + " " + holdbet);
    
    
}

cc(2); cc("K"); cc("A"); cc(5); cc(2); cc(3);


//The following will be an object. An object is similar to an arrray but rather than have items, instead has properties which are lsited as the following: 

/*var = myCat {
    "Fur": "Black",
    "Legs": 4, 
    "Friends": ["Dobby", "Henry"]
}

As can be seen all data types can be stored within an object. The properties can also be selected using . notation. 
*/

let myCat = {
    "Fur": "Black", 
    "Legs": 4, 
    "Friends": ["Luna", "Toto", "Bella"]
}
var fur = myCat.Fur;

console.log(fur);

/* If the property name within the object has a space for example 

let myCat = {  
    "fur colour": Black,
}

To select we would have to do the following to select it
var catfurcolour = myCat["fur colour"] <--- this would select the colour.


*/

function phoneticLookup(val){ //This phonetic lookup function needs a "val" through it.
    var result = ""; //This is an empty variable which will be populated when the function has a val passed through

    var lookup = { // Here is the "database" of properties with their asosicated values. 
        "alpha": "jimmy",
        "bravo": "ben",
        "charlie": "kris",
        "delta": "bungotong",
        "echo": "leafy",
        "foxtrot": "bread"
    }

    result = lookup[val]; //Once the databse is populated the result variable will take the value passed through it to select the database and subsequently the relevent property. 
    return result; //The property that has been selected will be stored in the result variable.
}

let a = phoneticLookup("delta"); //This is an example of passing a value through the function

console.log(a); //We are displaying the previous selection that was stored in another variable - a.

// whats going on here?
















