document.getElementById('scroll-down-btn').addEventListener('click', () => {
    document.getElementById('page-two').scrollIntoView();
});

window.addEventListener('wheel', function(event) {
    if (event.shiftKey) {
        event.preventDefault();
    }
}, { passive: false });

window.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
    }
});


document.getElementById('Menu-Btn').addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    document.getElementById('page-two').style.visibility = 'hidden';

    document.getElementById('heading-wrapper').style.opacity = '0';
    document.getElementById('heading-wrapper').style.visibility = 'hidden';
    const closeBtnDiv = document.querySelector('.closebtnDiv');
        closeBtnDiv.classList.add('show');
        document.querySelector('nav span').style.display = 'none';
        document.getElementById('Menu-Btn').style.display = 'none';
            const pageOne = document.getElementById('page-one');     
            pageOne.style.width = '78%';
    document.querySelector(".sidebar").style.display = 'block';
          

        
});

const closefunc = (() => {
    document.querySelector(".sidebar").style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('page-two').style.visibility = 'visible';
    setTimeout(() => {
        document.querySelector('nav span').style.display = 'block';
        document.getElementById('Menu-Btn').style.display = 'block';
        document.getElementById('heading-wrapper').style.opacity = '1';
        document.getElementById('heading-wrapper').style.visibility = 'visible';
    },500);
    
    document.getElementById('page-one').style.width = '100%';
    document.querySelector('nav').style.height = '6.1vh';
        const closeBtnDiv = document.querySelector('.closebtnDiv');
        closeBtnDiv.classList.remove('show');
        
});

document.querySelector(".thumbnail-part").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=RMZQ7-NnFCo";
});

document.querySelector(".img-container").addEventListener("click", function() {
    window.open("https://www.instagram.com/shanwithcamera/", "_blank");
});

document.querySelector(".shn-crt").addEventListener("click", function() {
    window.open("https://www.instagram.com/shannn_creatives/", "_blank");
});

document.querySelector(".poster").addEventListener("click", function() {
    window.open("https://shopee.ph/shanorcasitas?uls_trackid=50dg6dnn01o8&utm_content=fvfaQTHiwD9g7YXWNaPMchYGtpf", "_blank");
});

document.querySelector(".btn-fb").addEventListener("click", function() {
    window.open("https://www.facebook.com/shannnorcasitas", "_blank");
});
document.querySelector(".btn-ig").addEventListener("click", function() {
    window.open("https://www.instagram.com/_shanorcasitas/", "_blank");
});

document.querySelector(".btn-pp").addEventListener("click", function() {
    window.open("https://www.paypal.com/paypalme/shanorcasitas2004", "_blank");
});

document.querySelector(".btn-yt").addEventListener("click", function() {
    window.open("https://www.youtube.com/@_shanorcasitas", "_blank");
});

