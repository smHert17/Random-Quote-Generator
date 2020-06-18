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
let quotes = [
      {
        quote: "Get busy living or get busy dying.",
        source: '- Stephen King',
        citation: 'Shawshank Redemption',
        year: '1982'
      },
      {
        quote: "You think I look like I got money?",
        source: '–Spike Spiegel ',
        citation: 'Cowboy Bebop, Episode 12',
        year: 'October 7, 2001'
      },
      {
        quote: "Q!",
        source: '– Captain Jean-Luc Picard',
        citation: 'Star Trek: The Next Generation',
        year: 'September 28, 1987 to May 23, 1994'
      },
      {
        quote: "War is cruelty. There is no use trying to reform it; the crueler it is, the sooner it will be over.",
        source: '– William Tecumseh Sherman',
        citation: 'The Civil War Generation',
        year: '1864'
      },
      {
        quote: " Ladies and gentlemen, I don't know whether you fully understand that I have just been shot, but it takes more than that to kill a Bull Moose.",
        source: '– Theodore Roosevelt',
        citation: 'Wikipedia',
        year: 'October 14, 1912'
      },
      {
        quote: "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
        source: '– Audre Lorde',
        citation: 'The Cancer Journals',
        year: '1980'
      },
      /*{
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        source: '– Eleanor Roosevelt',
        citation: 'c',
        year: 'y'
      },
      {
        quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
        source: '– David Brinkley',
        citation: 'c',
        year: 'y'
      },
      {
        quote: "Those who dare to fail miserably can achieve greatly.",
        source: '– John F. Kennedy',
        citation: 'c',
        year: 'y'
      },
      {
        quote: "I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
        source: '-Herbert Bayard Swope',
        citation: 'c',
        year: 'y'
      },
      {
        quote: "It is hard to fail, but it is worse never to have tried to succeed.",
        source: '– Theodore Roosevelt',
        citation: 'c',
        year: 'y'
      }*/

];




/***
 * `getRandomQuote` function
 *Returns a random number based off the "quotesArr" length.
***/
function getRandomQuote () {
  let getRandom = Math.floor(Math.random() * quotes.length);
    randQuote = quotes[getRandom];
    return randQuote
}


/***
 * `printQuote` function
 *Prints quote objects and puts them in the correct html slots based off their class names.
***/
function printQuote() {
  let randomQuote = getRandomQuote();

  let showQuote = `<p class = "quote">${randomQuote.quote}</p>`;
      showQuote += `<p class = "source">${randomQuote.source}`;

         if (randomQuote.citation !== undefined){
           showQuote += `<span class = 'citation'> ${randomQuote.citation}</span>`
         }

         if (randomQuote.year !== undefined) {
           showQuote += `<span class = 'year'> ${randomQuote.year}</span>`
         }

         showQuote += `</p>`;



      document.getElementById('quote-box').innerHTML = showQuote;

};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
