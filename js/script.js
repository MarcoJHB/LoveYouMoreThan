const loveLine = document.getElementById('answer');

const arr = ["Gangstas in the hood",
    "Calories in X&O",
    "Anything in my life",
    "I did yesterday",
    "Popcorn!",
    "Building a new thriving economy in Cities Skylines",
    "Finding a 2-for-1 deal at Pick n Pay",
    "You love chocolate",
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
    love_btn.addEventListener('mousedown', (e) => {
        createHearts(love_btn.querySelector('.icon-container'));
    });

})

function createHearts(container) {
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
            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100)
    }
}