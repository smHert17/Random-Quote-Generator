/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/



/***
 * `getRandomQuote` function
 *This function uses Math.floor and Math.random functions to generate a quote from the quotesArr based off it's length. In this case 0-10.
***/
function getRandomQuote () {
  let getRandom = Math.floor(Math.random()*(quotes.length));
    randomQuote = quotesArr[getRandom];
    return randomQuote
}


/***
 * `printQuote` function
***/
function printQuote(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
