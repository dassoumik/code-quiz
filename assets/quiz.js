var quizData = [
{quiz: "Which HTML element do not need a closing tag?",
opt1: "nav",
opt2: "form",
opt3: "link",
opt4: "span",
ans:  "opt3", 
topic: "HTML"     
},

{quiz: 'What will the following line of code select? ~document.querySelector("#div");',  
opt1: "all 'div' elements",
opt2: "all elements with class div",
opt3: "first 'div' element",
opt4: "element with id 'div'", 
ans:  "opt4",
topic: "jScript"
},

{quiz: "Select the correct HTML tag to make a text bold.",  
opt1: "bb",
opt2: "b",
opt3: "bold",
opt4: "bo", 
ans:  "opt2",
topic: "HTML"
},

{quiz: "Which of the following function of String object produces an HTML hypertext link for requesting another URL?",  
opt1: "small()",
opt2: "sup()",
opt3: "link()",
opt4: "bo", 
ans:  "opt3",
topic: "jScript"
},

{quiz: "Which of the following is the output of the below JavaScript code? ~var x = [typeof x, typeof y][1]; ~typeof typeof x;",  
opt1: "string",
opt2: "number",
opt3: "object",
opt4: "undefined", 
ans:  "opt1",
topic: "jScript"
},

{quiz: "Select a function of Array object which returns a new array comprised of the current array /or its value(s)?",  
opt1: "concat()",
opt2: " valueOf()",
opt3: "None",
opt4: " toString()", 
ans:  "opt4",
topic: "jScript"
},


{quiz: "What is the output of the following JavaScript snippet? ~function() { ~var a = 10; ~if(a > 5) { ~ a = 7; ~a = 7;" +
        "~} ~alert(a); ~} ~",
opt1: "null",
opt2: "undefined",
opt3: "19",
opt4: "7", 
ans:  "opt4",
topic: "jScript"
},

{quiz: "What is the function of Array object that runs through each element of the array?",
 opt1: forEach(),
 opt2: filter(),
 opt3: every(),
 opt4: concat(),
 ans: "opt1",
 topic: "jScript"
},

{quiz: "Which of the following will return the type of the arguments passed to a function?",
 opt1: "using getType function",
 opt2: "using typeof operator",
 opt3: "Both of the above.",
 opt4: "None",
 ans: "opt2",
 topic: "jScript"
},

{quiz: "Which of the following is the output of the below JavaScript code? ~function() {  if(true) {  var a = 5;  }    ~   alert(a);}",
opt1: "undefined",
opt2: "null",
opt3: "0",
opt4: "5",
ans: "opt4",
topic: "jScript"
},

{quiz: "Which of the following methods removes the last element from an array and returns that element?",
opt1: "last()",
opt2: "None",
opt3: "get()",
opt4: "pop()",
ans: "opt4",
topic: "jScript"
},

{quiz: "Which of the following function of String object returns the capitalized string while respecting the current locale?",
opt1: "substring()",
opt2: "toUpperCase()",
opt3: "toLocaleUpperCase()",
opt4: "toString()",
ans: "opt3",
topic: "jScript"
},

{quiz: "Which of the following statements is valid for the features of JavaScript?",
opt1: "All",
opt2: "JavaScript is designed for creating network-centric applications.",
opt3: "JavaScript is a lightweight, interpreted programming language.",
opt4: "JavaScript is complementary to and integrated with Java.",
ans: "opt1",
topic: "jScript"
},

{quiz: "What is the result of the below JavaScript code when the functions get called in the order as mentioned? ~var a = 5; function first() {a = 6;} ~function second() {alert(a);}",
opt1: "null",
opt2: "0",
opt3: "5",
opt4: "6",
ans: "opt4",
topic: "jScript"
},

{quiz: "Which of the following is a true statement for JavaScript callbacks?",
opt1: "All except None.",
opt2: "A callback is a plain JavaScript function passed to some method as an argument or option.",
opt3: "Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
opt4: "None",
ans: "opt1",
topic: "jScript"
},

{quiz: "Select a String function that creates a string and display in a big font as if it were in a tag?",
opt1: "italics()",
opt2: "blink()",
opt3: "big()",
opt4: "anchor()",
ans: "opt3",
topic: "jScript"
},

{quiz: "Which of the following is the output of the below JavaScript code? ~ var x = [typeof x, typeof y][1]; ~typeof typeof x;",
opt1: "number",
opt2: "string",
opt3: "object",
opt4: "undefined",
ans: "opt2",
topic: "jScript"
},

{quiz: "Which of the following functions of Number object would return a string version of the number that may change according to the browser’s locale settings?",
opt1: "toExponential()",
opt2: "toFixed()",
opt3: "toLocaleString()",
opt4: "toString()",
ans: "opt3",
topic: "jScript"
},

{quiz: "Which of the following method of Boolean object returns a string depending upon the value of the object?",
opt1: "toSource()",
opt2: "valueOf()",
opt3: "toString()",
opt4: "None",
ans: "opt3",
topic: "jScript"
},

{quiz: "What is the function of Array object that adds and/or removes elements from an array?",
opt1: "toSource()",
opt2: "sort()",
opt3: "unshift()",
opt4: "splice()",
ans: "opt4",
topic: "jScript"
},

{quiz: "Select a String function that finds the match between a regular expression and a string, and to replace the matched substring with a new substring?",
opt1: "search()",
opt2: "concat()",
opt3: "match()",
opt4: "replace()",
ans: "opt4",
topic: "jScript"
},

{quiz: "Select a function of Array object which returns a new array comprised of the current array /or its value(s)?",
opt1: "pop()",
opt2: "some()",
opt3: "push()",
opt4: "concat()",
ans: "opt4",
topic: "jScript"
},

{quiz: "Which is the use of typeof operator in JavaScript?",
opt1: "The typeof is a unary operator. It should occur before the single operand, which can be of any type.",
opt2: "Its value is a string indicating the data type of the operand.",
opt3: "Both of the above.",
opt4: "None",
ans: "opt3",
topic: "jScript"
},

{quiz: "Which of the following function of String object would compare a regular expression with a string?",
opt1: "match()",
opt2: "concat()",
opt3: "replace()",
opt4: "search()",
ans: "opt1",
topic: "jScript"
},

{quiz: "Which of the following functions of Number object would display output in exponential format?",
opt1: "toExponential()",
opt2: "toFixed()",
opt3: "toPrecision()",
opt4: "toLocaleString()",
ans: "opt1",
topic: "jScript"
},

{quiz: "In CSS, what is the correct option to select all the tags on a page?",
opt1: "None",
opt2: ".p { }",
opt3: "#p { }",
opt4: "p { }",
ans: "opt4",
topic: "CSS"
},

{quiz: "For users that use the tab key to navigate websites, what property represents this way of moving from one element to another?",
opt1: "a:link",
opt2: "a:active",
opt3: "a:visited",
opt4: "a:focus",
ans: "opt4",
topic: "CSS"
},

{quiz: "Select the correct HTML tag to make a text italic?",
opt1: "Italic",
opt2: "I",
opt3: "It",
opt4: "None",
ans: "opt2",
topic: "HTML"
},

{quiz: "In CSS,Select the property used to set the spacing in between lines of text?",
opt1: "letter-spacing",
opt2: "spacing",
opt3: "line-height",
opt4: "line-spacing",
ans: "opt3",
topic: "CSS"
},

{quiz: "Select the property that is used to change the list style to show roman numerals instead of normal numbers?",
opt1: "list-style:roman;",
opt2: "list-type:roman;",
opt3: "list-bullet-type:roman-numerals;",
opt4: "list-style-type:upper-roman;",
ans: "opt4",
topic: "HTML"
},

{quiz: "Select the property that is used to create spacing between HTML elements?",
opt1: "padding",
opt2: "spacing",
opt3: "border",
opt4: "margin",
ans: "opt1",
topic: "HTML"
},

{quiz: "Select the option to make a list that lists the items with bullets?",
opt1: "list",
opt2: "ul",
opt3: "ol",
opt4: "dl",
ans: "opt4",
topic: "HTML"
},

{quiz: "Select the appropriate HTML tag for inserting a line break?",
opt1: "br",
opt2: "lb",
opt3: "brbr",
opt4: "break",
ans: "opt1",
topic: "HTML"
},

{quiz: "Select the appropriate HTML tag used for the largest heading?",
opt1: "heading",
opt2: "h6",
opt3: "h1",
opt4: "head",
ans: "opt3",
topic: "HTML"
},

{quiz: "Select the correct HTML for creating a hyperlink?",
opt1: 'A url="http://www.techbeamers.com">techbeamers.com',
opt2: '<A href="http://www.techbeamers.com">techbeamers</A>"',
opt3: "A>http://www.techbeamers.com",
opt4: 'A name="http://www.techbeamers.com">techbeamers.com"',
ans: "opt2",
topic: "HTML"
},

{quiz: "Select the option to make a list that lists the items with numbers?",
opt1: "ol",
opt2: "list",
opt3: "dl",
opt4: "ul",
ans: "opt1",
topic: "HTML"
},

{quiz: "In CSS,select the property used to set the background color of an image?",
opt1: "background:color",
opt2: "color:background",
opt3: "background-color",
opt4: "color",
ans: "opt3",
topic: "CSS"
},

{quiz: "Select the correct option to open a link in a new browser window?",
opt1: 'A href="url" target="_blank"',
opt2: 'A href="url" new',
opt3: 'A href="url" target="new"',
opt4: 'A href="url" target=_window"',
ans: "opt3",
topic: "HTML"
},

{quiz: "In CSS, Select the property to set an image in a list instead of a standard bullet?",
opt1: "list-image:",
opt2: "list-style-image:",
opt3: "list-image-src:",
opt4: "image-list:",
ans: "opt2",
topic: "CSS"
},

{quiz: "Select the correct HTML tag to make a text bold.",
opt1: "b",
opt2: "bb",
opt3: "bold",
opt4: "None",
ans: "opt1",
topic: "HTML"
},

{quiz: "Select the correct option to create an e-mail link?",
opt1: "A href=mailto:xxx@yyy.com",
opt2: 'Mail href="xxx@yyy.com"',
opt3: 'A href="xxx@yyy.com"',
opt4: "Mail>xxx@yyy.com/mail",
ans: "opt1",
topic: "HTML"
},

{quiz: "Select the property used to create space between the element’s border and inner content?",
opt1: "border",
opt2: "padding",
opt3: "spacing",
opt4: "margin",
ans: "opt2",
topic: "CSS"
},

{quiz: 'In CSS, Select the appropriate option to style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element? ~<img id=”mainpic” src=”cat.png”>',
opt1: "img { }",
opt2: "mainpic { }",
opt3: "#mainpic { }",
opt4: "mainpic { }",
ans: "opt2",
topic: "CSS"
},

{quiz: "In CSS, choose the correct option to select this image by its id?",
opt1: "display:horizontal;",
opt2: "display:inline;",
opt3: "None",
opt4: "margindisplay:left;",
ans: "opt2",
topic: "CSS"
}
]