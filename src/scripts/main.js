(function main() {
    function cycleImage(imgNode, options, interval) {
        
        setInterval(changeImg, interval);
        
        let imgIndex = 0;
        function changeImg() {
            imgNode.src = `./assets/images/mr/cards/${options[imgIndex]}.png`;
            imgIndex = (imgIndex + 1) % options.length;
        }
        changeImg();
    }

    const options = [
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
    cycleImage(cardsImg, options, 3000);

})();
