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


function getStickerLists() {
    return {
        lg: [...document.querySelectorAll('#sticker-lg-container img')],
        sm1: [...document.querySelectorAll('#sticker-sm1-container img')],
        sm2: [...document.querySelectorAll('#sticker-sm2-container img')],
    }
}

const stickerLgBg = document.querySelector('#sticker-lg-container');
const stickerLists = getStickerLists();
let currentStickerIndices = { lg: 0, sm1: 0, sm2: 0 };

function nextLargeSticker(prefix) {
    const prevStickerEl = stickerLists[prefix][currentStickerIndices[prefix]];
    prevStickerEl.style.display = 'none';
    currentStickerIndices[prefix] = (1 + currentStickerIndices[prefix]) % stickerLists[prefix].length;
    const currentStickerEl = stickerLists[prefix][currentStickerIndices[prefix]];
    currentStickerEl.style.display = 'unset';
    stickerLgBg.style.backgroundColor = currentStickerEl.dataset.bgColor;
}

(function main() {
    window.setInterval(() => nextLargeSticker('lg'), 3000);

    setTimeout(function() {
        window.setInterval(() => nextLargeSticker('sm1'), 3000);
    }, 1000);
    
    setTimeout(function() {
        window.setInterval(() => nextLargeSticker('sm2'), 3000);
    }, 2000);
})();