const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTopBtn > 100) {
        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.pointerEvents = "auto";
    } else {
        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.stylepo.pointerEvents = "none";
    }
};

scrollTopBtn.onclick = function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
};