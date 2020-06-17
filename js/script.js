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
let quotesArr = [
      {
        quote: `"Get busy living or get busy dying."`,
        source: '- Stephen King',
        citation: 'Shawshank Redemption',
        year: '1982'
      },
      {
        quote: `"I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.
        But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best."`,
        source: '– Marilyn Monroe'
        citation:
        year:
      },
      {
        quote: `"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."`,
        source: '– Mark Caine'
        citation:
        year:
      },
      {
        quote: `"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."`,
        source: '– Helen Keller'
        citation:
        year:
      },
      {
        quote: `"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."`,
        source: '– Mark Twain'
        citation:
        year:
      },
      {
        quote: `"When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid."`,
        source: '– Audre Lorde'
        citation:
        year:
      },
      {
        quote: `"Great minds discuss ideas; average minds discuss events; small minds discuss people."`,
        source: '– Eleanor Roosevelt'
        citation:
        year:
      },
      {
        quote: `"A successful man is one who can lay a firm foundation with the bricks others have thrown at him."`,
        source: '– David Brinkley'
        citation:
        year:
      },
      {
        quote: `"Those who dare to fail miserably can achieve greatly."`,
        source: '– John F. Kennedy'
        citation:
        year:
      },
      {
        quote: `"I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time."`,
        source: '-Herbert Bayard Swope'
        citation:
        year:
      },
      {
        quote: `"It is hard to fail, but it is worse never to have tried to succeed."`,
        source: '– Theodore Roosevelt'
        citation:
        year:
      }

];




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
