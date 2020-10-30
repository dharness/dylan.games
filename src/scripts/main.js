(function main() {
    const cardNames = [
        '7friends',
        'bobmeat',
        'box',
        'doris',
        'fish',
        'ganghis',
        'insects',
        'leap',
        'madame',
        'mark',
        'mosquitos',
        'toungue',
        'wanda'
    ];
    const cardsImg = document.getElementById('mr-cards-img');
    
    setInterval(changeCard, 3000);
    
    let cardIndex = 0;
    function changeCard() {
        cardsImg.src = `./assets/images/mr/cards/${cardNames[cardIndex]}.png`;
        cardIndex = (cardIndex + 1) % cardNames.length;
    }
}());