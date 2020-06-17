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
 *Returns a random number based off the "quotesArr" length.
***/
function getRandomQuote () {
  let getRandom = Math.floor(Math.random()*(quotes.length));
    randQuote = quotesArr[getRandom];
    return randomQuote
}


/***
 * `printQuote` function
 *Prints quoteArr objects and puts them in the correct html slots based off their class names.
***/
function printQuote() {
  let randomQuote = getRandomQuote()

  let showQuote = `<p class = "quote">${randomQuote.quote}</p>`
      showQuote = `<p class = "source">${randomQuote.source}
         if (randomQuote !== -1){
           showQuote += `<span class = 'citation'> ${randomQuote.citation}`
         }

         if (randomQuote !== -1) {
           showQuote += `<span class = 'year'> ${randomQuote.year}`
         }

         showquotes += </p>`;


      document.getElementById('quote-box').innerHTML = showQuote;



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
