var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    var gifsForFallback = document.querySelectorAll('.gif-fallback__gif');
    
    gifsForFallback.forEach(g => {
        var video = document.getElementById(g.id + '__video');
        video.style.display = 'none';
        g.style.removeProperty('display');
    });
}

