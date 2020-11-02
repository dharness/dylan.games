// (function main() {
//     /** -------------------- Cards -------------------- */

//     function cycleImage(imgNode, options, interval) {
        
//         setInterval(changeImg, interval);
        
//         let imgIndex = 0;
//         function changeImg() {
//             imgNode.src = `./assets/images/mr/cards/${options[imgIndex]}.png`;
//             imgIndex = (imgIndex + 1) % options.length;
//         }
//         changeImg();
//     }

//     const cardNames = [
//         '7friends',
//         'bobmeat',
//         'box',
//         'doris',
//         'fish',
//         'ganghis',
//         'insects',
//         'leap',
//         'madame',
//         'mark',
//         'mosquitos',
//         'toungue',
//         'wanda'
//     ];
//     const cardsImg = document.getElementById('mr-cards-img');
//     cycleImage(cardsImg, cardNames, 3000);

//     /** -------------------- Stickers -------------------- */

//     function cycleStickerImage(imgNode, prefix, options, interval) {
//         setInterval(changeImg, interval);
        
//         let imgIndex = 0;
//         function changeImg() {
//             const imgName = options[imgIndex].name;
//             imgNode.src = `./assets/images/mr/stickers/${prefix}/${imgName}.png`;
//             imgIndex = (imgIndex + 1) % options.length;
//         }
//         changeImg();
//     }

//     const small1Sticker = document.getElementById('mr-sticker-sm-1');
//     const small2Sticker = document.getElementById('mr-sticker-sm-2');
//     const largeSticker = document.getElementById('mr-sticker-lg');
//     const stickerPoof = document.getElementById('sticker-poof');


//     // var rect = small1Sticker.getBoundingClientRect();
//     // console.log(rect.top, rect.right, rect.bottom, rect.left);
//     // stickerPoof.style.left = rect.left;
//     // stickerPoof.style.top = rect.top;

//     cycleStickerImage(small1Sticker, 'small_1', stickerData['small-1'], 3000);
//     cycleStickerImage(small2Sticker, 'small_2', stickerData['small-2'], 3000);
//     cycleStickerImage(largeSticker, 'large', stickerData['large'], 3000);




// })();

const stickerData = {
    'sm-1': [
        {name: '7friends_waffle-mix'},
        {name: 'box_pirate-hat'},
        {name: 'madame_newton'},
        {name: 'bob_magazine'},
        {name: 'doris_glue'},
        {name: 'madame_screaming-apple'},
        {name: 'bob_sausage'},
        {name: 'fish_tv'},
        {name: 'madame_wig'},
        {name: 'bob_tongue'},
        {name: 'insects_spray'},
        {name: 'tongue_bush'},
        {name: 'box_bolts'},
        {name: 'leapsack_egg'},
        {name: 'tongue_log'},
        {name: 'box_crate'},
        {name: 'leapsack_pills'},
        {name: 'box_hammer'},
        {name: 'madame_gravity'}
    ],
    'sm-2': [
        {name: '7friends_brian'},
        {name: 'insects_flies'},
        {name: 'tongue_flowers'},
        {name: '7friends_piggy-bank'},
        {name: 'leapsack_clock'},
        {name: 'tongue_pitcher-plant'},
        {name: '7friends_plug'},
        {name: 'madame_underwear'},
        {name: 'wanda_balloon-2'},
        {name: '7friends_presents'},
        {name: 'mark_sauce'},
        {name: 'wanda_balloon'},
        {name: 'bob_drowning-man-in-jar'},
        {name: 'mosquitos_snail'},
        {name: 'wanda_cake'},
        {name: 'insects_bag-of-garbage'},
        {name: 'mosquitos_straw'},
        {name: 'wanda_candle'}
    ],
    'lg': [
        {
            name: 'blender',
            width: '90%',
            color: '#ffd1d1'
        },
        {
            name: 'doris_uncle',
            width: '110%',
            color: '#fee090'
        },
        {
            name: 'leapsack_little-man',
            width: '76%',
            color: '#aaeefe'
        },
        {
            name: 'fish_dad',
            width: '81%',
            color: '#fee090'
        },
        {
            name: 'bob_steak',
            width: '71%',
            color: '#aaeefe'
        },
        {
            name: 'mark_spaghetti',
            width: '119%',
            color: '#ffd1d1'

        },
        {
            name: 'box_bunny',
            width: '107%',
            color: '#aaeefe'
        },
        {
            name: 'fish_deborah',
            width: '74%',
            color: '#ffd1d1'
        },
        {
            name: 'mosquitos_fly',
            width: '75%',
            color: '#aaeefe'

        },
        {
            name: 'doris_crayon',
            width: '87%',
            color: '#ffd1d1'
        },
        {
            name: 'fish_lil-debbie',
            width: '95%',
            color: '#ffd1d1'
        },
        {
            name: 'mosquitos_juice',
            width: '75%',
            color: '#fee090'
        },
        {
            name: 'doris_dad',
            width: '110%',
            color: '#ffd1d1'
        },
        {
            name: 'insects_banana',
            width: '119%',
            color: '#aaeefe'
        },
        {
            name: 'wanda_ovaries',
            width: '73%',
            color: '#fee090'
        },
        {
            name: 'doris_mom',
            width: '100%',
            color: '#ffd1d1'
        },
        {
            name: 'leapsack',
            width: '90%',
            color: '#aaeefe'
        },
    ],
};

let largeStickerIndex = -1;

function playSmoke() {
    const imgNode = document.getElementById('mr-sticker-lg-poof');
    const interval = 75;
    let smokeFrame = 0;
    const maxSmokeFrame = 8;
    let intervalId;
    const changeImg = () => {
        if (smokeFrame == maxSmokeFrame) {
            imgNode.src = '//:0';
            smokeFrame = 0;
            clearInterval(intervalId);
        } else {
            imgNode.src = `./assets/mr-makes/smokes/smoke_${smokeFrame}.png`;
            smokeFrame++;
        }
    }
    changeImg();
    intervalId = setInterval(changeImg, interval);
}

function setSticker(prefix, index) {
    const largeSticker = document.getElementById('mr-sticker-lg');
    const largeStickerBg = document.querySelector('.mr-sticker-lg');

    const nextStickerData = stickerData[prefix][index];
    const stickerName = nextStickerData.name;
    largeSticker.src = `./assets/mr-makes/stickers/${prefix}/${stickerName}.png`
    largeSticker.style.width = nextStickerData.width || '100%';
    if (nextStickerData.color)
    {
        largeStickerBg.style.backgroundColor = nextStickerData.color;
    }
}

function nextLargeSticker() {
    const prefix = 'lg';
    largeStickerIndex = (largeStickerIndex + 1) % stickerData[prefix].length;
    setSticker(prefix, largeStickerIndex);
}