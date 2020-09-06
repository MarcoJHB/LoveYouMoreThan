const loveLine = document.getElementById('answer');

const arr = ["Gangstas in the hood",
    "Calories in X&O",
    "Anything in my life",
    "I did yesterday",
    "Popcorn!",
    "Drum n Bass & Hip Hop combined",
    "You love me",
    `<a href="https://g.co/kgs/7MP7PJ">Graham's number
    </a>`,
    "Building a new thriving economy in Cities Skylines",
    "Finding a 2-for-1 deal at Pick n Pay",
    "You love chocolate",
    "The bass drop on my favourite drum and bass song",
    "Muchachos after a heavy night",
    "Macaroni loves cheese",
    "Pimps love canes",
    "Popping pimples",
    "The next OnePlus phone",
    "Avocados",
    "Any show or movie I've ever watched",
    "French people being c*nts",
    "Anything I've ever loved in my life",
    "Error-free JavaScript code",
    "Boobs",
    "Peeing after driving for 3 hours",
    "Playing my favourite PC/PS game",
    "Hipsters love craft beer",
    "A good serif/sans-serif font combo",
    "Waking up early",
    "My dad's laptop loves making a loud noise",
    "Boets love their betties, biceps and Golf GTIs",
    "Going viral on Reddit",
    "Teenage Mutant Ninja Turtles love pizza",
    "My 1st coffee in the morning",
    "A sexy Excel spreadsheet",
    "ANC politicians love corruption",
    "Fonts"
];

function moreThan() {
    loveLine.innerHTML =
        arr[Math.floor(Math.random() * arr.length)];
}


const love_btns = document.querySelectorAll('.love');

love_btns.forEach(love_btn => {
    love_btn.addEventListener('click', (e) => {
        createHearts(love_btn.querySelector('.icon-container'));
    });

})

function createHearts() {
    // create 5 hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('span');
            heart.classList.add('heart');
            heart.innerHTML = '<i class="fa fa-heart"></i>';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = Math.random() * 20 + 5 + 'px';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            document.getElementsByClassName("main-section")[0].appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100)
    }
}