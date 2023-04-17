// generate random number
const generateRandomNum = (num) => {
    return Math.floor(Math.random() * num);
}

// variable data
const poohData = {
    poohImages: [
        'balloon.jpg',
        'boots.jpg',
        'mr-sanders.jpg',        
        'bridge-sticks.jpg',
        'cr-and-green-door.jpg',
        'mr-sanders.jpg',
        'pooh-and-tree.jpg',
        'honey.jpg',
        'picnic.jpg',
        'pooh-and-piglet.jpg',
        'pooh-and-tree.jpg',
        'pooh-piglet-snow.jpg'
    ],
    poohFacts: [
        'Pooh was inspired by an 18" high Alpha Farnell teddy bear bought from Harrods in London for Christopher Robin on his first birthday.<sup> 3</sup>',
        'Pooh is a "Bear of very Little Brain."<sup> 3</sup>',
        'First called Mr. Edward Bear, he was renamed after a real bear called Winnie at the London Zoo.<sup> 3</sup>',
        'One story suggests that \'Pooh\' was added because the original Winnie smelled very bad.<sup> 3</sup>',
        'Winnie was short for \'Winnipeg.\' The zoo bear had been the mascot for the Winnipeg regiment of the Canadian Army in World War 1.<sup> 3</sup>',
        'Winnie of the London Zoo was a female.<sup> 3</sup>',
        'Winnie-the-Pooh has been translated into 46 languages, including Latin.<sup> 3</sup>',
        'The Latin translation, <em>Winnie ille Pu</em>, is the only Latin book ever to have been featured on the NY Times Best Seller List.<sup> 3</sup>',
        'The 100 Acre Wood is based on Ashdown Forest in Sussex, which was near the Milne family\'s country home, Cotchford Farm.<sup> 3</sup>',
        'Pooh is patron saint of teddy bears.<sup> 3</sup>'
    ],
    poohQuotes: [
        '"People say nothing is impossible, but I do nothing every day."<sup> 1</sup>',
        '"A hug is always the right size."<sup> 1</sup>',
        '"If you live to be 100, I want to live to be 100 minus one day so I never have to live without you.<sup>1</sup>',
        '"When you wake up in the morning, Pooh," said Piglet at last, "What\'s the first thing you say to yourself?" "What\'s for breakfast?" said Pooh. "What do you say, Piglet?" "I say, I wonder what\'s going to happen exciting today?" said Piglet. Pooh nodded thoughtfully. "It\'s the same thing," he said.”<sup> 1</sup>',
        '"For I am a bear of very little brain, and long words bother me."<sup> 1</sup>',
        '"My spelling is wobbly. It\'s good spelling but it Wobbles, and the letters get in the wrong places."<sup> 1</sup>',
        '"You\'re just in time for a little smackeral of something..."<sup> 2</sup>'        
    ]
}

// generate pooh function
const randomizePooh = (e) => {
    let randomImage = poohData.poohImages[generateRandomNum(poohData.poohImages.length)];
    let randomFact = poohData.poohFacts[generateRandomNum(poohData.poohFacts.length)];
    let randomQuote = poohData.poohQuotes[generateRandomNum(poohData.poohQuotes.length)];

    let poohContent = `<img src="images/${randomImage}" alt="random image from Winnie the Pooh" /><h2 id="rp-heading">Say something whimsical, Pooh.</h2><p>${randomQuote}</p><h3>Fun Fact:</h3><p>${randomFact}</p>`;
    document.getElementById('rp-container').innerHTML = poohContent;
    
}

// handle click event
const button = document.getElementById('rp-button');

button.addEventListener('click', randomizePooh);