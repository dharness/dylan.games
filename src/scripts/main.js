(function main() {
    /** -------------------- Cards -------------------- */

    function cycleImage(imgNode, options, interval) {
        
        setInterval(changeImg, interval);
        
        let imgIndex = 0;
        function changeImg() {
            imgNode.src = `./assets/images/mr/cards/${options[imgIndex]}.png`;
            imgIndex = (imgIndex + 1) % options.length;
        }
        changeImg();
    }

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
    cycleImage(cardsImg, cardNames, 3000);

    /** -------------------- Stickers -------------------- */

    function cycleStickerImage(imgNode, prefix, options, interval) {
        setInterval(changeImg, interval);
        
        let imgIndex = 0;
        function changeImg() {
            const imgName = options[imgIndex].name;
            imgNode.src = `./assets/images/mr/stickers/${prefix}/${imgName}.png`;
            imgIndex = (imgIndex + 1) % options.length;
        }
        changeImg();
    }

    const stickerData = {
        'small-1': [
            {
                name: '7friends_waffle-mix',
                css: {
                    width: '100%'
                }
            }
        ],
        'small-2': [
            {
                name: '7friends_brian',
                css: {
                    width: '100%'
                }
            }
        ],
        'large': [
            {
                name: 'doris_dad',
                css: {
                    width: '100%'
                }
            }
        ],
    };

    const small1Sticker = document.getElementById('mr-sticker-sm-1');
    const small2Sticker = document.getElementById('mr-sticker-sm-1');
    const largeSticker = document.getElementById('mr-sticker-lg');

    cycleStickerImage(small1Sticker, 'small_1', stickerData['small-1'], 3000);
    cycleStickerImage(small2Sticker, 'small_2', stickerData['small-2'], 3000);
    cycleStickerImage(largeSticker, 'large', stickerData['large'], 3000);

})();
