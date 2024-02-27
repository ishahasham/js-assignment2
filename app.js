// home PDF chap6-9.docx
// Chapter 6

// 1. Code a short form of x = x + 1; Use either of the two legal expressions.


// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
var x=100;
--x;
console.log(x)

// 3. var x = 50; var y = x++;
// What is the value of y?
50

// var y = 50; var z = --y;
// What is the value of z?
49

// 5. In a single statement, decrement num and assign its original value to newNum.
var num=25;
var newNum=--num;
console.log(newNum);

// 6. In a single statement add 1 to a variable and assign its original value to another variable.
var num1=59;
var num2=++num1;
console.log(num2);

// 7. Assign a number value to a variable. Increment the variable. Display the new value in an alert
var number=20;
var number2=++number;
// alert(number2);

// CHAPTER 7

// 1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?
14

// 2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?
24

// 3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?
24

// 4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?
18

// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
var a=(2+2)*(4+10)
// output=56


// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
2+(2*4)+10
// output=20

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
4/(2*4)

// CHAPTER 8

// 1. var num = "2" + "2"; What is the value of num? Include quotation marks.
22

// 2. message = ("Hello" + "Dolly");What is the value of message? (Include the quotation marks.) Alert the statement
 var message=("Hello" + "Dolly");
alert(message);

// 3.alert("3" + 3);  What message displays in the alert box?
33

// 4. Write an alert that displays the concatenation of the two parts of /"Pakistan Zindabad"
alert("Pakistan"+ "Zindabad");

// 5. Write a statement that assigns to a variable the concatenation of a string with a number
alert("55"+4);

// 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.
var alpha="Hello";
var beta="World";
var gamma=alpha+beta;
console.log(gamma);

// CHAPTER 9

// 1. Code a prompt with the message "Enter first name". The users response is assigned to firstName.
var name=prompt("Enter first name");
console.log(name);

// 2. Code a prompt with the message "Country" and the default answer "China". The users response is assigned to country.
var country="China"
prompt(country);

// 3. Correct this statement var yourName = prompt(Enter Your name");
var yourName =  prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message Include a default input.
var input="ENTER YOUR AGE:";
var ageValue=prompt(input);
console.log(ageValue);

// 5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user&#39;s response to a third variable.
var msg="Enter your father name:";
var dafault="Hasham Mushtaq";
var userInput=prompt(msg, dafault);
console.log("User's response:", userInput);

// continue in ques 6
// 6. Display a prompt, including both a message and a default response. Display the user&#39;s response in an alert.
alert(userInput);


// CHAPTER 4 LEGAL AND ILLEGAL VARIABLE NAME 

// 1. Declare 3 variables in one statement.
var input1, input2, input3;

// 2. Declare 5 legal & 5 illegal variable names.
// LEGAL:
var my_class, my$class, classFellow, classfellow, $myclass;
// ILLEGAL:
// var my-class, 24456class, my class, 238class499, *classmate;

// 3. Display this in your browser
document.write(
    "<h1>“Rules for naming JS variables”</h1><br> b) Variable names can only contain letters, dollarsign, underscores, digits. <br> c) Variables must begin with a dollarsign, underscores, or letter.<br> d) Variable names are 'case-sensitive'. <br> e) Variable names should not be JS keywords like if,function etc.  "
);

// CHAPTER 5: MATH EXPRESSION 

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var value1=3+5;
var value2=value1;
document.write("<br> Sum of 3 and 5 is "+value2);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
var value1=3-5;
var value1=3*5;
var value1=3/5;
var value1=3%5;
console.log(value1)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var firstValue;
firstValue=5;
document.write("<br> Initial value: "+firstValue+"<br> Value after increment is "+ ++firstValue);
var secondValue=firstValue + 7;
document.write("<br> Value after addition is "+ secondValue);
document.write("<br> Value after decrement is "+ --secondValue);
var thirdValue=secondValue/3;
document.write("<br> The reminder is "+ thirdValue);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
var ticket=600;
// ticket price in a variable & calculate the cost of buying 5 tickets
var totalvalue=ticket*5;
document.write("<br>Total cost to buy 5 tickets to a movie is "+totalvalue+"PKR");

// 5. Write a script to display multiplication table of any number in your browser.
var tableValue=4;
var linebreak="<br>"
document.write(linebreak+tableValue+"x1="+tableValue*1+linebreak+tableValue+"x2="+tableValue*2+linebreak+tableValue+"x3="+tableValue*3+linebreak+tableValue+"x4="+tableValue*4+linebreak+tableValue+"x5="+tableValue*5+linebreak+tableValue+"x6="+tableValue*6+linebreak+tableValue+"x7="+tableValue*7+linebreak+tableValue+"x8="+tableValue*8+linebreak+tableValue+"x9="+tableValue*9+linebreak+tableValue+"x10="+tableValue*10);

// // 6. The Temperature Converter:
var f=70;
var c=25;
var celsiusTemp=(f-32)*5/9;
var fahrenheitTemp=(c*9/5)+32;
document.write(linebreak+"25C is"+fahrenheitTemp+"F"+linebreak+"70F is "+celsiusTemp+"C.")

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
var item1=650;
var item2=100;
var itemQuantity1=3;
var itemQuantity2=7;
var shippingCharges=100;
var totalPrice=(item1*itemQuantity1)+(item2*itemQuantity2)+shippingCharges;
document.write(linebreak+"<h1>Shopping Cart</h1>"+linebreak+"Price of item 1 is "+item1+linebreak+"Quantity of item 1 is "+itemQuantity1+linebreak+"Price of item 2 is "+item2+linebreak+"Quantity of item 2 is "+itemQuantity2+linebreak+"Shipping Charges is "+shippingCharges +linebreak+ "Total cost of your order is "+totalPrice);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks=980;
var marks_obtained=804;
var percentage=(marks_obtained*100)/totalMarks;
document.write(linebreak,"<h1>Mark sheet</h1>",linebreak+"total marks:"+totalMarks+linebreak,"marks obtained:",marks_obtained+linebreak+"Percentage:"+percentage);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var us$=104.80;
var riyal=28;
var totalus$=us$*10;
var totalriyal=riyal*25;
var final_calc=totalus$+totalriyal;
document.write(linebreak,"<h1>Currency in PKR</h1>", linebreak,"Total currency in PKR:",final_calc);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var var1=2;
var var2=((var1+5)*10)/2;
console.log(var2);

// 11. The Age Calculator:
var currentYear=2024;
var birthYear=2003;
var finalAge=currentYear-birthYear;
document.write(linebreak+"<h1>Age Calculator</h1>",linebreak,"Current Year: ",currentYear,linebreak,"Birth Year: ",birthYear,linebreak,"Your Age: ",finalAge);

// 12. The Geometrizer: Calculate properties of a circle.
var radiusValue=20;
var pi=3.142;
var circumference=2*pi*radiusValue;
var areaCircle=pi*(radiusValue*radiusValue)
document.write(linebreak+"<h1>The Geometrizer</h1>",linebreak,"Radius of a circle: ",radiusValue,linebreak,"The circumference is: ",circumference,linebreak,"The area is: ",areaCircle);

// 13. The Lifetime Supply Calculator:
var favSnack="chocolate chip";
var currentAge=15;
var maxAge=65;
var estimated=3;
var lifetime=(currentAge-maxAge)*estimated;
document.write(linebreak+"<h1>The Lifetime supply calculator</h1>",linebreak,"Favourite snack: ",favSnack,linebreak,"Current age: ",currentAge,linebreak,"Estimated Maximum age: ",maxAge,linebreak,"Amount of snacks per day",estimated,linebreak,"You will need ",lifetime,favSnack," to last you until the ripe old age of ",maxAge);

// CHAPTER 6-9:

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result 
var num_1=10;
document.write(linebreak,linebreak,"result:",linebreak,"the value of a is",num_1,linebreak,"<hr>the value of ++a is: ",++num_1,linebreak,"Now the value is: ",num_1,linebreak,"the value of ++a is: ",num_1++,linebreak,"now the value of a is",num_1,linebreak,"the value of --a is: ",--num_1,linebreak,"now the value is: ",num_1,linebreak,"the value of a-- is ",num_1--,linebreak,"now the value of a is: ",num_1);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
var m = 2, n = 1;
var result_1 = --m - --n + ++n + n--;
document.write(linebreak,"m is ",m,linebreak,"n is ",n,linebreak,"result is ",result_1)
// Explain the output at each stage:
// --m;
// 1
// --m - --n;
// 1-0
// --m - --n + ++n;
// 1-0+1
// --m - --n + ++n + n--;
// 1-0+1+1
// output will be: 3

// 3. Write a program that takes input a name from user &
// greet the user.
var userName=prompt("Enter your name");
if(userName){
    alert("HEYYY WELCOME!!");
}
else{
    alert("you didn't write your name :(")
}

// finish