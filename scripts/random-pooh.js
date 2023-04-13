// generate random number
const generateRandomNum = (num) => {
    return Math.floor(Math.random() * num);
}

// variable data
const poohData = {
    poohImages: [
        'eeyore-and-his-new-house.jpg',
        'fpo.jpg',
        'mr-sanders.jpg',
        'pooh-and-christopher-robin.jpg'
    ],
    poohHeadings: [
        'Winnie the Pooh is a friendly and kind animal.',
        'A Bear of very Little Brain.',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six'

    ],
    poohQuotes: [
        'People say nothing is impossible, but I do nothing every day.',
        'A hug is always the right size.',
        'If you live to be 100, I want to live to be 100 minus one day so I never have to live without you.',
        'What\s for breakfast?',
        'For I am a bear of very little brain, and long words bother me.',
        'My spelling is wobbly. It\'s good spelling but it Wobbles, and the letters get in the wrong places.'
    ]
}

// generate pooh function
const randomizePooh = (e) => {
    let randomImage = poohData.poohImages[generateRandomNum(poohData.poohImages.length)];
    let randomHeading = poohData.poohHeadings[generateRandomNum(poohData.poohHeadings.length)];
    let randomQuote = poohData.poohQuotes[generateRandomNum(poohData.poohQuotes.length)];

    let poohContent = `<img src="images/${randomImage}" alt="random image from Winnie the Pooh" /><h2>${randomHeading}</h2><p>"${randomQuote}"</p>`;
    document.getElementById('rp-container').innerHTML = poohContent;
    e.preventDefault();
}

// handle click event
const button = document.getElementById('rp-button');

button.addEventListener('click', (randomizePooh));







