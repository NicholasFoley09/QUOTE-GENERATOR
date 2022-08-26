let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to loose yourself in the service to others."`,
    person: `Mahatma Gandhi`
},{
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
},{
    quote: `"At his best, man is the noblest of all animals; seperated from law and justice, he is the worst"`,
    person: `Aristotle`
},{
    quote: `"Your time is limited, so don't waste it living someone else's life"`,
    person: `Steve Jobs`
},{
    quote: `"Tell me and i forget, Teach me and i remember, Involve me and i learn"`,
    person: `Benjamin Franklin`
},{
    quote:`"if you look at what you have in life, you will always have more. If you don't look at what you done have in life, you will never have enough"`,
    person: `Oprah Winfrey`
},{
    quote:`"It does not matter how slowly you go, as long as you dont stop"`,
    person: `Conficius`
},{
    quote: `"Our life begins to end the day we become silent about things that matters"`,
    person: `Martin Luther King, Jr`
},{
    quote: `"Remember that not getting what you what is sometimes a wonderful stroke of luck"`,
    person: `Dalai lama`
},{
    quote: `"The journey of a thousand miles begins with a step"`,
    person: `Lao Tzu`
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});